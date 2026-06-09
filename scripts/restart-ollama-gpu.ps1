# Redémarre Ollama en mode GPU CUDA + précharge bac-qwen3-14b
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)

# CUDA : ne PAS mettre OLLAMA_LLM_LIBRARY=cuda (0.30.7 → CPU uniquement)
$env:CUDA_VISIBLE_DEVICES = '0'
$env:OLLAMA_VULKAN = '0'
$env:GGML_VK_VISIBLE_DEVICES = '-1'
$env:OLLAMA_INTEL_GPU = '0'
$env:OLLAMA_CONTEXT_LENGTH = '8192'
$env:OLLAMA_FLASH_ATTENTION = '1'
$env:OLLAMA_KV_CACHE_TYPE = 'q8_0'
$env:OLLAMA_LOAD_TIMEOUT = '10m0s'

Write-Host 'Arret Ollama…'
Get-Process -Name 'ollama*' -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

Write-Host 'Creation modele bac-qwen3-14b…'
ollama create bac-qwen3-14b -f "$PSScriptRoot\Modelfile.bac-qwen" 2>$null | Out-Null

# ollama create relance parfois l'app tray (ctx 65536) — on la ferme
Get-Process -Name 'ollama*' -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

Write-Host 'Demarrage ollama serve (CUDA · sans Vulkan Intel)…'
Start-Process -WindowStyle Hidden -FilePath 'ollama' -ArgumentList 'serve'

Start-Sleep -Seconds 4
Write-Host 'Prechargement GPU…'
$body = @{
  model = 'bac-qwen3-14b'
  keep_alive = '60m'
  think = $false
  stream = $false
  messages = @(@{ role = 'user'; content = 'OK' })
  options = @{ num_ctx = 8192; num_gpu = 999; num_thread = 2; num_predict = 1 }
} | ConvertTo-Json -Depth 6
Invoke-RestMethod -Uri 'http://127.0.0.1:11434/api/chat' -Method Post -Body $body -ContentType 'application/json' | Out-Null

ollama ps
nvidia-smi --query-gpu=memory.used,memory.total,utilization.gpu --format=csv,noheader 2>$null

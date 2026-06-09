# Redémarre Ollama en mode GPU CUDA + précharge bac-qwen3-14b
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)

$env:OLLAMA_LLM_LIBRARY = 'cuda'
$env:CUDA_VISIBLE_DEVICES = '0'
$env:OLLAMA_FLASH_ATTENTION = '1'
$env:OLLAMA_KV_CACHE_TYPE = 'q8_0'

Write-Host 'Arret Ollama…'
taskkill /F /IM ollama.exe 2>$null
taskkill /F /IM 'ollama app.exe' 2>$null
Start-Sleep -Seconds 2

Write-Host 'Creation modele bac-qwen3-14b…'
ollama create bac-qwen3-14b -f "$PSScriptRoot\Modelfile.bac-qwen"

Write-Host 'Demarrage ollama serve (CUDA)…'
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

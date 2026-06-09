# Bac Français — démarrage automatique (serveur + Ollama VRAM NVIDIA)
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host 'Node.js requis : https://nodejs.org' -ForegroundColor Red
  exit 1
}
if (-not (Get-Command ollama -ErrorAction SilentlyContinue)) {
  Write-Host 'Ollama requis : https://ollama.com' -ForegroundColor Red
  exit 1
}

& "$PSScriptRoot\scripts\setup-ollama-gpu-env.ps1" -Quiet

$gpuEnv = @{
  CUDA_VISIBLE_DEVICES    = '0'
  OLLAMA_VULKAN           = '0'
  GGML_VK_VISIBLE_DEVICES = '-1'
  OLLAMA_INTEL_GPU        = '0'
  OLLAMA_CONTEXT_LENGTH   = '8192'
  OLLAMA_FLASH_ATTENTION  = '1'
  OLLAMA_KV_CACHE_TYPE    = 'q8_0'
  OLLAMA_MAX_LOADED_MODELS = '1'
  OLLAMA_NUM_PARALLEL     = '1'
  OLLAMA_LOAD_TIMEOUT     = '10m0s'
  OLLAMA_HOST             = '127.0.0.1:11434'
}
foreach ($k in $gpuEnv.Keys) { Set-Item -Path "env:$k" -Value $gpuEnv[$k] }
Remove-Item Env:OLLAMA_LLM_LIBRARY -ErrorAction SilentlyContinue

Write-Host 'Arret Ollama (tray)…' -ForegroundColor DarkGray
Get-Process -Name 'ollama*' -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

# Libère le port 8765 si un ancien serveur tourne encore
$portPid = (Get-NetTCPConnection -LocalPort 8765 -State Listen -ErrorAction SilentlyContinue |
  Select-Object -ExpandProperty OwningProcess -Unique | Select-Object -First 1)
if ($portPid) {
  Stop-Process -Id $portPid -Force -ErrorAction SilentlyContinue
  Start-Sleep -Seconds 1
}

Write-Host 'Demarrage Bac Français + VRAM CUDA (automatique)…' -ForegroundColor Cyan
node "$PSScriptRoot\scripts\local-server.mjs"

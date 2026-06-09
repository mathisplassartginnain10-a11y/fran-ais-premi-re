# Lance l'app + Ollama en mode GPU (VRAM CUDA uniquement)
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

# Force CUDA / VRAM (NVIDIA)
$env:OLLAMA_LLM_LIBRARY = 'cuda'
$env:CUDA_VISIBLE_DEVICES = '0'
$env:OLLAMA_FLASH_ATTENTION = '1'
$env:OLLAMA_KV_CACHE_TYPE = 'q8_0'
$env:OLLAMA_MAX_LOADED_MODELS = '1'
$env:OLLAMA_NUM_PARALLEL = '1'

Write-Host 'Arret Ollama existant…' -ForegroundColor DarkGray
taskkill /F /IM ollama.exe 2>$null | Out-Null
taskkill /F /IM 'ollama app.exe' 2>$null | Out-Null
Start-Sleep -Seconds 2

Write-Host 'Modele GPU bac-qwen3-14b…' -ForegroundColor DarkGray
ollama create bac-qwen3-14b -f "$PSScriptRoot\scripts\Modelfile.bac-qwen" 2>$null | Out-Null

Write-Host 'Demarrage serveur (VRAM CUDA · ctx 8192)…' -ForegroundColor Cyan
node "$PSScriptRoot\scripts\local-server.mjs"

# Variables Ollama persistantes (Windows) — RTX 5080 · VRAM NVIDIA
param([switch]$Quiet)

$ErrorActionPreference = 'Stop'

[Environment]::SetEnvironmentVariable('OLLAMA_LLM_LIBRARY', $null, 'User')

$vars = @{
  CUDA_VISIBLE_DEVICES    = '0'
  OLLAMA_VULKAN           = '0'
  GGML_VK_VISIBLE_DEVICES = '-1'
  OLLAMA_INTEL_GPU        = '0'
  OLLAMA_CONTEXT_LENGTH   = '8192'
  OLLAMA_LOAD_TIMEOUT     = '10m0s'
  OLLAMA_FLASH_ATTENTION  = '1'
  OLLAMA_KV_CACHE_TYPE    = 'q8_0'
  OLLAMA_MAX_LOADED_MODELS = '1'
  OLLAMA_NUM_PARALLEL     = '1'
}

foreach ($k in $vars.Keys) {
  [Environment]::SetEnvironmentVariable($k, $vars[$k], 'User')
  if (-not $Quiet) { Write-Host "  $k = $($vars[$k])" }
}

if (-not $Quiet) {
  Write-Host ''
  Write-Host 'Variables GPU enregistrées pour Windows.' -ForegroundColor Green
}

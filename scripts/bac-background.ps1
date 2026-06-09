# Veille : relance start.ps1 si le port 8765 est fermé (Startup Windows)
$ErrorActionPreference = 'SilentlyContinue'
$Root = Split-Path $PSScriptRoot -Parent
Set-Location $Root

function Test-BacPort {
  try {
    $c = Get-NetTCPConnection -LocalPort 8765 -State Listen -ErrorAction SilentlyContinue
    return [bool]$c
  } catch { return $false }
}

while ($true) {
  if (-not (Test-BacPort)) {
    $node = Get-Command node -ErrorAction SilentlyContinue
    if ($node) {
      Start-Process -WindowStyle Hidden -FilePath 'powershell.exe' -ArgumentList @(
        '-NoProfile', '-ExecutionPolicy', 'Bypass',
        '-File', "`"$Root\start.ps1`""
      ) | Out-Null
      Start-Sleep -Seconds 20
    }
  }
  Start-Sleep -Seconds 15
}

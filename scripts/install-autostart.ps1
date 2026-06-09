# Raccourci Startup + protocole bacfrancais:// (démarrage depuis le navigateur)
param([switch]$Quiet)

$ErrorActionPreference = 'Stop'
$Root = Split-Path $PSScriptRoot -Parent
$Lancer = Join-Path $Root 'Lancer.bat'

# Protocole bacfrancais://launch → Lancer.bat
$proto = 'bacfrancais'
$base = "HKCU:\Software\Classes\$proto"
New-Item -Path $base -Force | Out-Null
Set-Item -Path $base -Value 'URL:Bac Francais Protocol'
New-Item -Path "$base\DefaultIcon" -Force | Out-Null
Set-Item -Path "$base\DefaultIcon" -Value "$Lancer,0"
New-Item -Path "$base\shell\open\command" -Force | Out-Null
Set-Item -Path "$base\shell\open\command" -Value "`"$Lancer`" `"%1`""

# Raccourci veille port 8765 (Startup)
$startup = [Environment]::GetFolderPath('Startup')
$lnkPath = Join-Path $startup 'Bac Francais (serveur).lnk'
$wsh = New-Object -ComObject WScript.Shell
$lnk = $wsh.CreateShortcut($lnkPath)
$lnk.TargetPath = 'powershell.exe'
$lnk.Arguments = "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$Root\scripts\bac-background.ps1`""
$lnk.WorkingDirectory = $Root
$lnk.Description = 'Bac Francais — serveur local http://127.0.0.1:8765'
$lnk.Save()

# Raccourci bureau (optionnel pratique)
$desktop = [Environment]::GetFolderPath('Desktop')
$deskLnk = Join-Path $desktop 'Bac Francais.lnk'
$dl = $wsh.CreateShortcut($deskLnk)
$dl.TargetPath = $Lancer
$dl.WorkingDirectory = $Root
$dl.Description = 'Lancer Bac Francais + Ollama VRAM'
$dl.Save()

if (-not $Quiet) {
  Write-Host 'OK — demarrage auto installe (Startup + bacfrancais:// + raccourci bureau)' -ForegroundColor Green
}

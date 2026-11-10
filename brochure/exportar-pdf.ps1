# Exporta brochure/index.html a brochure/brochure-jd.pdf usando Edge o Chrome en modo headless.
# Uso: powershell -ExecutionPolicy Bypass -File brochure\exportar-pdf.ps1
$ErrorActionPreference = 'Stop'

$browser = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'No se encontró Edge ni Chrome.' }

$html = Join-Path $PSScriptRoot 'index.html'
$pdf  = Join-Path $PSScriptRoot 'brochure-jd.pdf'
$url  = ([System.Uri]$html).AbsoluteUri

# Perfil temporal propio: si el navegador ya está abierto, sin esto le entrega la tarea a esa ventana y no imprime.
# virtual-time-budget da tiempo a que carguen las fuentes de Google antes de imprimir.
$pdfTmp = Join-Path $PSScriptRoot 'brochure-jd.tmp.pdf'
if (Test-Path $pdfTmp) { Remove-Item $pdfTmp -Force }
$perfil = Join-Path $env:TEMP 'jd-brochure-perfil'
$argumentos = @('--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000',
  "--user-data-dir=`"$perfil`"", "--print-to-pdf=`"$pdfTmp`"", $url)
Start-Process -FilePath $browser -ArgumentList $argumentos -Wait -WindowStyle Hidden
if (-not (Test-Path $pdfTmp)) { throw 'No se generó el PDF.' }
Move-Item -Path $pdfTmp -Destination $pdf -Force
$webPublic = Join-Path (Split-Path $PSScriptRoot -Parent) 'web\public'
if (Test-Path $webPublic) {
  Copy-Item -Path $pdf -Destination (Join-Path $webPublic 'brochure-jd.pdf') -Force
}
Write-Host "PDF generado: $pdf"

param(
  [string]$Host,
  [string]$User,
  [string]$Pass,
  [int]$Port = 21,
  [string]$RemoteRoot = "/public_html",
  [string]$Local = "$PSScriptRoot\dist"
)

$ErrorActionPreference = "Stop"

if (-not $Host -or -not $User -or -not $Pass) {
  Write-Error "Missing FTP credentials. Provide -Host, -User, -Pass (or set env vars)."
}

$base = "ftpes://{0}:{1}" -f $Host, $Port

function Upload-Dir {
  param([string]$LocalPath, [string]$RemotePath)
  $uri = "$base$RemotePath"
  $mkdir = New-Object System.Net.FtpWebRequest
  $mkdir = [System.Net.FtpWebRequest]::Create($uri)
  $mkdir.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
  $mkdir.Credentials = New-Object System.Net.NetworkCredential($User, $Pass)
  $mkdir.EnableSsl = $true
  $mkdir.UsePassive = $true
  try { $mkdir.GetResponse().Close() } catch { }
  foreach ($item in Get-ChildItem -LiteralPath $LocalPath -Force) {
    if ($item.PSIsContainer) {
      Upload-Dir $item.FullName "$RemotePath/$($item.Name)"
    } else {
      $fileUri = "$base$RemotePath/$($item.Name)"
      $req = [System.Net.FtpWebRequest]::Create($fileUri)
      $req.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
      $req.Credentials = New-Object System.Net.NetworkCredential($User, $Pass)
      $req.EnableSsl = $true
      $req.UsePassive = $true
      $req.UseBinary = $true
      $bytes = [System.IO.File]::ReadAllBytes($item.FullName)
      $req.ContentLength = $bytes.Length
      $stream = $req.GetRequestStream()
      $stream.Write($bytes, 0, $bytes.Length)
      $stream.Close()
      $resp = $req.GetResponse()
      Write-Output ("UP  {0}/{1}" -f $RemotePath, $item.Name)
      $resp.Close()
    }
  }
}

Write-Output "Uploading $Local -> $base$RemoteRoot"
Upload-Dir $Local $RemoteRoot
Write-Output "Deploy complete."
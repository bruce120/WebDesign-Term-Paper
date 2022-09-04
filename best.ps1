Clear-DnsServerCache -force `
ipconfig /flushdns `
Restart-Service -Name netlogon `
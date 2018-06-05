# LCIDs
TypeScript representation of Windows Language Code Identifiers (LCID) and CultureInfo
## Description: 
The package gives you TypeScript/JS representation of .NET SpecificCultures
//PowerShell [CultureInfo]::GetCultures([System.Globalization.CultureTypes]::SpecificCultures) | select LCID,Name,DisplayName,NativeName | ConvertTo-Json | Out-File -FilePath CultureInfos.js

## Installation: 
npm i lcids

## Usage: 
Use lcids object to get an array of objects mapping LCID to culture name, one of these objects below
    
```
import { lcids } from 'lcids';
...
{
    "LCID":  1033,
    "Name":  "en-US",
    "DisplayName":  "English (United States)",
    "NativeName":  "English (United States)"
}
...
```


Use CultureInfo class to create culture info object by name or LCID based on the above array.

```
import { CultureInfo } from 'lcids';
new CultureInfo({ name: "en-US" })
new CultureInfo({ lcid: 1033 })
```

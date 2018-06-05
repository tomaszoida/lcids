# lcids
TypeScript representation of Windows Language Code Identifiers (LCID) and CultureInfo
##Description: 
The package gives you TypeScript/JS representation of .NET SpecificCultures
//PowerShell [CultureInfo]::GetCultures([System.Globalization.CultureTypes]::SpecificCultures) | select LCID,Name,DisplayName,NativeName | ConvertTo-Json | Out-File -FilePath CultureInfos.jsomportance of your project, and what it does.

##Installation: 
Installation is the next section in an effective README. Tell other users how to install your project locally. Optionally, include a gif to make the process even more clear for other people.

##Usage: 
Use lcids object to get an array of objects mapping LCID to culture name, one of these objects below
    {
        "LCID":  1033,
        "Name":  "en-US",
        "DisplayName":  "English (United States)",
        "NativeName":  "English (United States)"
    }

Use CultureInfo class to create culture info object by name or LCID based on the above array.



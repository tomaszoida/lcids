//PowerShell [CultureInfo]::GetCultures([System.Globalization.CultureTypes]::SpecificCultures) | select LCID,Name,DisplayName,NativeName | ConvertTo-Json | Out-File -FilePath CultureInfos.json

export let lcids = [
    {
        "LCID":  1078,
        "Name":  "af-ZA",
        "DisplayName":  "Afrikaans (South Africa)",
        "NativeName":  "Afrikaans (Suid-Afrika)"
    },
    {
        "LCID":  1118,
        "Name":  "am-ET",
        "DisplayName":  "Amharic (Ethiopia)",
        "NativeName":  "አማርኛ (ኢትዮጵያ)"
    },
    {
        "LCID":  14337,
        "Name":  "ar-AE",
        "DisplayName":  "Arabic (U.A.E.)",
        "NativeName":  "العربية (الإمارات العربية المتحدة)"
    },
    {
        "LCID":  15361,
        "Name":  "ar-BH",
        "DisplayName":  "Arabic (Bahrain)",
        "NativeName":  "العربية (البحرين)"
    },
    {
        "LCID":  5121,
        "Name":  "ar-DZ",
        "DisplayName":  "Arabic (Algeria)",
        "NativeName":  "العربية (الجزائر)"
    },
    {
        "LCID":  3073,
        "Name":  "ar-EG",
        "DisplayName":  "Arabic (Egypt)",
        "NativeName":  "العربية (مصر)"
    },
    {
        "LCID":  2049,
        "Name":  "ar-IQ",
        "DisplayName":  "Arabic (Iraq)",
        "NativeName":  "العربية (العراق)"
    },
    {
        "LCID":  11265,
        "Name":  "ar-JO",
        "DisplayName":  "Arabic (Jordan)",
        "NativeName":  "العربية (الأردن)"
    },
    {
        "LCID":  13313,
        "Name":  "ar-KW",
        "DisplayName":  "Arabic (Kuwait)",
        "NativeName":  "العربية (الكويت)"
    },
    {
        "LCID":  12289,
        "Name":  "ar-LB",
        "DisplayName":  "Arabic (Lebanon)",
        "NativeName":  "العربية (لبنان)"
    },
    {
        "LCID":  4097,
        "Name":  "ar-LY",
        "DisplayName":  "Arabic (Libya)",
        "NativeName":  "العربية (ليبيا)"
    },
    {
        "LCID":  6145,
        "Name":  "ar-MA",
        "DisplayName":  "Arabic (Morocco)",
        "NativeName":  "العربية (المملكة المغربية)"
    },
    {
        "LCID":  8193,
        "Name":  "ar-OM",
        "DisplayName":  "Arabic (Oman)",
        "NativeName":  "العربية (عمان)"
    },
    {
        "LCID":  16385,
        "Name":  "ar-QA",
        "DisplayName":  "Arabic (Qatar)",
        "NativeName":  "العربية (قطر)"
    },
    {
        "LCID":  1025,
        "Name":  "ar-SA",
        "DisplayName":  "Arabic (Saudi Arabia)",
        "NativeName":  "العربية (المملكة العربية السعودية)"
    },
    {
        "LCID":  10241,
        "Name":  "ar-SY",
        "DisplayName":  "Arabic (Syria)",
        "NativeName":  "العربية (سوريا)"
    },
    {
        "LCID":  7169,
        "Name":  "ar-TN",
        "DisplayName":  "Arabic (Tunisia)",
        "NativeName":  "العربية (تونس)"
    },
    {
        "LCID":  9217,
        "Name":  "ar-YE",
        "DisplayName":  "Arabic (Yemen)",
        "NativeName":  "العربية (اليمن)"
    },
    {
        "LCID":  1146,
        "Name":  "arn-CL",
        "DisplayName":  "Mapudungun (Chile)",
        "NativeName":  "Mapudungun (Chile)"
    },
    {
        "LCID":  1101,
        "Name":  "as-IN",
        "DisplayName":  "Assamese (India)",
        "NativeName":  "অসমীয়া (ভাৰত)"
    },
    {
        "LCID":  2092,
        "Name":  "az-Cyrl-AZ",
        "DisplayName":  "Azerbaijani (Cyrillic, Azerbaijan)",
        "NativeName":  "Азәрбајҹан (Азәрбајҹан)"
    },
    {
        "LCID":  1068,
        "Name":  "az-Latn-AZ",
        "DisplayName":  "Azerbaijani (Latin, Azerbaijan)",
        "NativeName":  "Azərbaycan dili (Azərbaycan)"
    },
    {
        "LCID":  1133,
        "Name":  "ba-RU",
        "DisplayName":  "Bashkir (Russia)",
        "NativeName":  "Башҡорт (Рәсәй)"
    },
    {
        "LCID":  1059,
        "Name":  "be-BY",
        "DisplayName":  "Belarusian (Belarus)",
        "NativeName":  "Беларуская (Беларусь)"
    },
    {
        "LCID":  1026,
        "Name":  "bg-BG",
        "DisplayName":  "Bulgarian (Bulgaria)",
        "NativeName":  "български (България)"
    },
    {
        "LCID":  2117,
        "Name":  "bn-BD",
        "DisplayName":  "Bangla (Bangladesh)",
        "NativeName":  "বাংলা (বাংলাদেশ)"
    },
    {
        "LCID":  1093,
        "Name":  "bn-IN",
        "DisplayName":  "Bangla (India)",
        "NativeName":  "বাংলা (ভারত)"
    },
    {
        "LCID":  1105,
        "Name":  "bo-CN",
        "DisplayName":  "Tibetan (PRC)",
        "NativeName":  "བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)"
    },
    {
        "LCID":  1150,
        "Name":  "br-FR",
        "DisplayName":  "Breton (France)",
        "NativeName":  "brezhoneg (Frañs)"
    },
    {
        "LCID":  8218,
        "Name":  "bs-Cyrl-BA",
        "DisplayName":  "Bosnian (Cyrillic, Bosnia and Herzegovina)",
        "NativeName":  "босански (Босна и Херцеговина)"
    },
    {
        "LCID":  5146,
        "Name":  "bs-Latn-BA",
        "DisplayName":  "Bosnian (Latin, Bosnia and Herzegovina)",
        "NativeName":  "bosanski (Bosna i Hercegovina)"
    },
    {
        "LCID":  1027,
        "Name":  "ca-ES",
        "DisplayName":  "Catalan (Catalan)",
        "NativeName":  "Català (Català)"
    },
    {
        "LCID":  2051,
        "Name":  "ca-ES-valencia",
        "DisplayName":  "Valencian (Spain)",
        "NativeName":  "Valencià (Espanya)"
    },
    {
        "LCID":  1116,
        "Name":  "chr-Cher-US",
        "DisplayName":  "Cherokee (Cherokee)",
        "NativeName":  "ᏣᎳᎩ (ᏣᎳᎩ)"
    },
    {
        "LCID":  1155,
        "Name":  "co-FR",
        "DisplayName":  "Corsican (France)",
        "NativeName":  "Corsu (Francia)"
    },
    {
        "LCID":  1029,
        "Name":  "cs-CZ",
        "DisplayName":  "Czech (Czech Republic)",
        "NativeName":  "čeština (Česká republika)"
    },
    {
        "LCID":  1106,
        "Name":  "cy-GB",
        "DisplayName":  "Welsh (United Kingdom)",
        "NativeName":  "Cymraeg (Y Deyrnas Unedig)"
    },
    {
        "LCID":  1030,
        "Name":  "da-DK",
        "DisplayName":  "Danish (Denmark)",
        "NativeName":  "dansk (Danmark)"
    },
    {
        "LCID":  3079,
        "Name":  "de-AT",
        "DisplayName":  "German (Austria)",
        "NativeName":  "Deutsch (Österreich)"
    },
    {
        "LCID":  2055,
        "Name":  "de-CH",
        "DisplayName":  "German (Switzerland)",
        "NativeName":  "Deutsch (Schweiz)"
    },
    {
        "LCID":  1031,
        "Name":  "de-DE",
        "DisplayName":  "German (Germany)",
        "NativeName":  "Deutsch (Deutschland)"
    },
    {
        "LCID":  5127,
        "Name":  "de-LI",
        "DisplayName":  "German (Liechtenstein)",
        "NativeName":  "Deutsch (Liechtenstein)"
    },
    {
        "LCID":  4103,
        "Name":  "de-LU",
        "DisplayName":  "German (Luxembourg)",
        "NativeName":  "Deutsch (Luxemburg)"
    },
    {
        "LCID":  2094,
        "Name":  "dsb-DE",
        "DisplayName":  "Lower Sorbian (Germany)",
        "NativeName":  "dolnoserbšćina (Nimska)"
    },
    {
        "LCID":  1125,
        "Name":  "dv-MV",
        "DisplayName":  "Divehi (Maldives)",
        "NativeName":  "ދިވެހިބަސް (ދިވެހި ރާއްޖެ)"
    },
    {
        "LCID":  1032,
        "Name":  "el-GR",
        "DisplayName":  "Greek (Greece)",
        "NativeName":  "Ελληνικά (Ελλάδα)"
    },
    {
        "LCID":  9225,
        "Name":  "en-029",
        "DisplayName":  "English (Caribbean)",
        "NativeName":  "English (Caribbean)"
    },
    {
        "LCID":  3081,
        "Name":  "en-AU",
        "DisplayName":  "English (Australia)",
        "NativeName":  "English (Australia)"
    },
    {
        "LCID":  10249,
        "Name":  "en-BZ",
        "DisplayName":  "English (Belize)",
        "NativeName":  "English (Belize)"
    },
    {
        "LCID":  4105,
        "Name":  "en-CA",
        "DisplayName":  "English (Canada)",
        "NativeName":  "English (Canada)"
    },
    {
        "LCID":  2057,
        "Name":  "en-GB",
        "DisplayName":  "English (United Kingdom)",
        "NativeName":  "English (United Kingdom)"
    },
    {
        "LCID":  15369,
        "Name":  "en-HK",
        "DisplayName":  "English (Hong Kong SAR)",
        "NativeName":  "English (Hong Kong)"
    },
    {
        "LCID":  6153,
        "Name":  "en-IE",
        "DisplayName":  "English (Ireland)",
        "NativeName":  "English (Ireland)"
    },
    {
        "LCID":  16393,
        "Name":  "en-IN",
        "DisplayName":  "English (India)",
        "NativeName":  "English (India)"
    },
    {
        "LCID":  8201,
        "Name":  "en-JM",
        "DisplayName":  "English (Jamaica)",
        "NativeName":  "English (Jamaica)"
    },
    {
        "LCID":  17417,
        "Name":  "en-MY",
        "DisplayName":  "English (Malaysia)",
        "NativeName":  "English (Malaysia)"
    },
    {
        "LCID":  5129,
        "Name":  "en-NZ",
        "DisplayName":  "English (New Zealand)",
        "NativeName":  "English (New Zealand)"
    },
    {
        "LCID":  13321,
        "Name":  "en-PH",
        "DisplayName":  "English (Republic of the Philippines)",
        "NativeName":  "English (Philippines)"
    },
    {
        "LCID":  18441,
        "Name":  "en-SG",
        "DisplayName":  "English (Singapore)",
        "NativeName":  "English (Singapore)"
    },
    {
        "LCID":  11273,
        "Name":  "en-TT",
        "DisplayName":  "English (Trinidad and Tobago)",
        "NativeName":  "English (Trinidad and Tobago)"
    },
    {
        "LCID":  1033,
        "Name":  "en-US",
        "DisplayName":  "English (United States)",
        "NativeName":  "English (United States)"
    },
    {
        "LCID":  7177,
        "Name":  "en-ZA",
        "DisplayName":  "English (South Africa)",
        "NativeName":  "English (South Africa)"
    },
    {
        "LCID":  12297,
        "Name":  "en-ZW",
        "DisplayName":  "English (Zimbabwe)",
        "NativeName":  "English (Zimbabwe)"
    },
    {
        "LCID":  22538,
        "Name":  "es-419",
        "DisplayName":  "Spanish (Latin America)",
        "NativeName":  "español (Latinoamérica)"
    },
    {
        "LCID":  11274,
        "Name":  "es-AR",
        "DisplayName":  "Spanish (Argentina)",
        "NativeName":  "español (Argentina)"
    },
    {
        "LCID":  16394,
        "Name":  "es-BO",
        "DisplayName":  "Spanish (Bolivia)",
        "NativeName":  "español (Bolivia)"
    },
    {
        "LCID":  13322,
        "Name":  "es-CL",
        "DisplayName":  "Spanish (Chile)",
        "NativeName":  "español (Chile)"
    },
    {
        "LCID":  9226,
        "Name":  "es-CO",
        "DisplayName":  "Spanish (Colombia)",
        "NativeName":  "español (Colombia)"
    },
    {
        "LCID":  5130,
        "Name":  "es-CR",
        "DisplayName":  "Spanish (Costa Rica)",
        "NativeName":  "español (Costa Rica)"
    },
    {
        "LCID":  7178,
        "Name":  "es-DO",
        "DisplayName":  "Spanish (Dominican Republic)",
        "NativeName":  "español (República Dominicana)"
    },
    {
        "LCID":  12298,
        "Name":  "es-EC",
        "DisplayName":  "Spanish (Ecuador)",
        "NativeName":  "español (Ecuador)"
    },
    {
        "LCID":  3082,
        "Name":  "es-ES",
        "DisplayName":  "Spanish (Spain)",
        "NativeName":  "español (España, alfabetización internacional)"
    },
    {
        "LCID":  4106,
        "Name":  "es-GT",
        "DisplayName":  "Spanish (Guatemala)",
        "NativeName":  "español (Guatemala)"
    },
    {
        "LCID":  18442,
        "Name":  "es-HN",
        "DisplayName":  "Spanish (Honduras)",
        "NativeName":  "español (Honduras)"
    },
    {
        "LCID":  2058,
        "Name":  "es-MX",
        "DisplayName":  "Spanish (Mexico)",
        "NativeName":  "español (México)"
    },
    {
        "LCID":  19466,
        "Name":  "es-NI",
        "DisplayName":  "Spanish (Nicaragua)",
        "NativeName":  "español (Nicaragua)"
    },
    {
        "LCID":  6154,
        "Name":  "es-PA",
        "DisplayName":  "Spanish (Panama)",
        "NativeName":  "español (Panamá)"
    },
    {
        "LCID":  10250,
        "Name":  "es-PE",
        "DisplayName":  "Spanish (Peru)",
        "NativeName":  "español (Perú)"
    },
    {
        "LCID":  20490,
        "Name":  "es-PR",
        "DisplayName":  "Spanish (Puerto Rico)",
        "NativeName":  "español (Puerto Rico)"
    },
    {
        "LCID":  15370,
        "Name":  "es-PY",
        "DisplayName":  "Spanish (Paraguay)",
        "NativeName":  "español (Paraguay)"
    },
    {
        "LCID":  17418,
        "Name":  "es-SV",
        "DisplayName":  "Spanish (El Salvador)",
        "NativeName":  "español (El Salvador)"
    },
    {
        "LCID":  21514,
        "Name":  "es-US",
        "DisplayName":  "Spanish (United States)",
        "NativeName":  "español (Estados Unidos)"
    },
    {
        "LCID":  14346,
        "Name":  "es-UY",
        "DisplayName":  "Spanish (Uruguay)",
        "NativeName":  "español (Uruguay)"
    },
    {
        "LCID":  8202,
        "Name":  "es-VE",
        "DisplayName":  "Spanish (Bolivarian Republic of Venezuela)",
        "NativeName":  "español (Republica Bolivariana de Venezuela)"
    },
    {
        "LCID":  1061,
        "Name":  "et-EE",
        "DisplayName":  "Estonian (Estonia)",
        "NativeName":  "eesti (Eesti)"
    },
    {
        "LCID":  1069,
        "Name":  "eu-ES",
        "DisplayName":  "Basque (Basque)",
        "NativeName":  "euskara (euskara)"
    },
    {
        "LCID":  1065,
        "Name":  "fa-IR",
        "DisplayName":  "Persian (Iran)",
        "NativeName":  "فارسى (ایران)"
    },
    {
        "LCID":  2151,
        "Name":  "ff-Latn-SN",
        "DisplayName":  "Fulah (Latin, Senegal)",
        "NativeName":  "Fulah (Sénégal)"
    },
    {
        "LCID":  1035,
        "Name":  "fi-FI",
        "DisplayName":  "Finnish (Finland)",
        "NativeName":  "suomi (Suomi)"
    },
    {
        "LCID":  1124,
        "Name":  "fil-PH",
        "DisplayName":  "Filipino (Philippines)",
        "NativeName":  "Filipino (Pilipinas)"
    },
    {
        "LCID":  1080,
        "Name":  "fo-FO",
        "DisplayName":  "Faroese (Faroe Islands)",
        "NativeName":  "føroyskt (Føroyar)"
    },
    {
        "LCID":  2060,
        "Name":  "fr-BE",
        "DisplayName":  "French (Belgium)",
        "NativeName":  "français (Belgique)"
    },
    {
        "LCID":  3084,
        "Name":  "fr-CA",
        "DisplayName":  "French (Canada)",
        "NativeName":  "français (Canada)"
    },
    {
        "LCID":  9228,
        "Name":  "fr-CD",
        "DisplayName":  "French (Congo DRC)",
        "NativeName":  "français (Congo [RDC])"
    },
    {
        "LCID":  4108,
        "Name":  "fr-CH",
        "DisplayName":  "French (Switzerland)",
        "NativeName":  "français (Suisse)"
    },
    {
        "LCID":  12300,
        "Name":  "fr-CI",
        "DisplayName":  "French (Côte d’Ivoire)",
        "NativeName":  "français (Côte d’Ivoire)"
    },
    {
        "LCID":  11276,
        "Name":  "fr-CM",
        "DisplayName":  "French (Cameroon)",
        "NativeName":  "français (Cameroun)"
    },
    {
        "LCID":  1036,
        "Name":  "fr-FR",
        "DisplayName":  "French (France)",
        "NativeName":  "français (France)"
    },
    {
        "LCID":  15372,
        "Name":  "fr-HT",
        "DisplayName":  "French (Haiti)",
        "NativeName":  "français (Haïti)"
    },
    {
        "LCID":  5132,
        "Name":  "fr-LU",
        "DisplayName":  "French (Luxembourg)",
        "NativeName":  "français (Luxembourg)"
    },
    {
        "LCID":  14348,
        "Name":  "fr-MA",
        "DisplayName":  "French (Morocco)",
        "NativeName":  "français (Maroc)"
    },
    {
        "LCID":  6156,
        "Name":  "fr-MC",
        "DisplayName":  "French (Monaco)",
        "NativeName":  "français (Principauté de Monaco)"
    },
    {
        "LCID":  13324,
        "Name":  "fr-ML",
        "DisplayName":  "French (Mali)",
        "NativeName":  "français (Mali)"
    },
    {
        "LCID":  8204,
        "Name":  "fr-RE",
        "DisplayName":  "French (Reunion)",
        "NativeName":  "français (Réunion)"
    },
    {
        "LCID":  10252,
        "Name":  "fr-SN",
        "DisplayName":  "French (Senegal)",
        "NativeName":  "français (Sénégal)"
    },
    {
        "LCID":  1122,
        "Name":  "fy-NL",
        "DisplayName":  "Frisian (Netherlands)",
        "NativeName":  "Frysk (Nederlân)"
    },
    {
        "LCID":  2108,
        "Name":  "ga-IE",
        "DisplayName":  "Irish (Ireland)",
        "NativeName":  "Gaeilge (Éire)"
    },
    {
        "LCID":  1169,
        "Name":  "gd-GB",
        "DisplayName":  "Scottish Gaelic (United Kingdom)",
        "NativeName":  "Gàidhlig (An Rìoghachd Aonaichte)"
    },
    {
        "LCID":  1110,
        "Name":  "gl-ES",
        "DisplayName":  "Galician (Galician)",
        "NativeName":  "galego (galego)"
    },
    {
        "LCID":  1140,
        "Name":  "gn-PY",
        "DisplayName":  "Guarani (Paraguay)",
        "NativeName":  "Guarani (Paraguái)"
    },
    {
        "LCID":  1156,
        "Name":  "gsw-FR",
        "DisplayName":  "Alsatian (France)",
        "NativeName":  "Elsässisch (Frànkrisch)"
    },
    {
        "LCID":  1095,
        "Name":  "gu-IN",
        "DisplayName":  "Gujarati (India)",
        "NativeName":  "ગુજરાતી (ભારત)"
    },
    {
        "LCID":  1128,
        "Name":  "ha-Latn-NG",
        "DisplayName":  "Hausa (Latin, Nigeria)",
        "NativeName":  "Hausa (Nijeriya)"
    },
    {
        "LCID":  1141,
        "Name":  "haw-US",
        "DisplayName":  "Hawaiian (United States)",
        "NativeName":  "Hawaiʻi (ʻAmelika)"
    },
    {
        "LCID":  1037,
        "Name":  "he-IL",
        "DisplayName":  "Hebrew (Israel)",
        "NativeName":  "עברית (ישראל)"
    },
    {
        "LCID":  1081,
        "Name":  "hi-IN",
        "DisplayName":  "Hindi (India)",
        "NativeName":  "हिंदी (भारत)"
    },
    {
        "LCID":  4122,
        "Name":  "hr-BA",
        "DisplayName":  "Croatian (Latin, Bosnia and Herzegovina)",
        "NativeName":  "hrvatski (Bosna i Hercegovina)"
    },
    {
        "LCID":  1050,
        "Name":  "hr-HR",
        "DisplayName":  "Croatian (Croatia)",
        "NativeName":  "hrvatski (Hrvatska)"
    },
    {
        "LCID":  1070,
        "Name":  "hsb-DE",
        "DisplayName":  "Upper Sorbian (Germany)",
        "NativeName":  "hornjoserbšćina (Němska)"
    },
    {
        "LCID":  1038,
        "Name":  "hu-HU",
        "DisplayName":  "Hungarian (Hungary)",
        "NativeName":  "magyar (Magyarország)"
    },
    {
        "LCID":  1067,
        "Name":  "hy-AM",
        "DisplayName":  "Armenian (Armenia)",
        "NativeName":  "Հայերեն (Հայաստան)"
    },
    {
        "LCID":  1057,
        "Name":  "id-ID",
        "DisplayName":  "Indonesian (Indonesia)",
        "NativeName":  "Bahasa Indonesia (Indonesia)"
    },
    {
        "LCID":  1136,
        "Name":  "ig-NG",
        "DisplayName":  "Igbo (Nigeria)",
        "NativeName":  "Igbo (Nigeria)"
    },
    {
        "LCID":  1144,
        "Name":  "ii-CN",
        "DisplayName":  "Yi (PRC)",
        "NativeName":  "ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)"
    },
    {
        "LCID":  1039,
        "Name":  "is-IS",
        "DisplayName":  "Icelandic (Iceland)",
        "NativeName":  "íslenska (Ísland)"
    },
    {
        "LCID":  2064,
        "Name":  "it-CH",
        "DisplayName":  "Italian (Switzerland)",
        "NativeName":  "italiano (Svizzera)"
    },
    {
        "LCID":  1040,
        "Name":  "it-IT",
        "DisplayName":  "Italian (Italy)",
        "NativeName":  "italiano (Italia)"
    },
    {
        "LCID":  1117,
        "Name":  "iu-Cans-CA",
        "DisplayName":  "Inuktitut (Syllabics, Canada)",
        "NativeName":  "ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕᒥ)"
    },
    {
        "LCID":  2141,
        "Name":  "iu-Latn-CA",
        "DisplayName":  "Inuktitut (Latin, Canada)",
        "NativeName":  "Inuktitut (Kanatami)"
    },
    {
        "LCID":  1041,
        "Name":  "ja-JP",
        "DisplayName":  "Japanese (Japan)",
        "NativeName":  "日本語 (日本)"
    },
    {
        "LCID":  4096,
        "Name":  "jv-Latn-ID",
        "DisplayName":  "Javanese (Indonesia)",
        "NativeName":  "Basa Jawa (Indonesia)"
    },
    {
        "LCID":  1079,
        "Name":  "ka-GE",
        "DisplayName":  "Georgian (Georgia)",
        "NativeName":  "ქართული (საქართველო)"
    },
    {
        "LCID":  1087,
        "Name":  "kk-KZ",
        "DisplayName":  "Kazakh (Kazakhstan)",
        "NativeName":  "Қазақ (Қазақстан)"
    },
    {
        "LCID":  1135,
        "Name":  "kl-GL",
        "DisplayName":  "Greenlandic (Greenland)",
        "NativeName":  "kalaallisut (Kalaallit Nunaat)"
    },
    {
        "LCID":  1107,
        "Name":  "km-KH",
        "DisplayName":  "Khmer (Cambodia)",
        "NativeName":  "ភាសាខ្មែរ (កម្ពុជា)"
    },
    {
        "LCID":  1099,
        "Name":  "kn-IN",
        "DisplayName":  "Kannada (India)",
        "NativeName":  "ಕನ್ನಡ (ಭಾರತ)"
    },
    {
        "LCID":  1042,
        "Name":  "ko-KR",
        "DisplayName":  "Korean (Korea)",
        "NativeName":  "한국어(대한민국)"
    },
    {
        "LCID":  1111,
        "Name":  "kok-IN",
        "DisplayName":  "Konkani (India)",
        "NativeName":  "कोंकणी (भारत)"
    },
    {
        "LCID":  1170,
        "Name":  "ku-Arab-IQ",
        "DisplayName":  "Central Kurdish (Iraq)",
        "NativeName":  "کوردیی ناوەڕاست (کوردستان)"
    },
    {
        "LCID":  1088,
        "Name":  "ky-KG",
        "DisplayName":  "Kyrgyz (Kyrgyzstan)",
        "NativeName":  "Кыргыз (Кыргызстан)"
    },
    {
        "LCID":  1134,
        "Name":  "lb-LU",
        "DisplayName":  "Luxembourgish (Luxembourg)",
        "NativeName":  "Lëtzebuergesch (Lëtzebuerg)"
    },
    {
        "LCID":  1108,
        "Name":  "lo-LA",
        "DisplayName":  "Lao (Lao P.D.R.)",
        "NativeName":  "ພາສາລາວ (ສປປ ລາວ)"
    },
    {
        "LCID":  1063,
        "Name":  "lt-LT",
        "DisplayName":  "Lithuanian (Lithuania)",
        "NativeName":  "lietuvių (Lietuva)"
    },
    {
        "LCID":  1062,
        "Name":  "lv-LV",
        "DisplayName":  "Latvian (Latvia)",
        "NativeName":  "latviešu (Latvija)"
    },
    {
        "LCID":  4096,
        "Name":  "mg-MG",
        "DisplayName":  "Malagasy (Madagascar)",
        "NativeName":  "Malagasy (Madagasikara)"
    },
    {
        "LCID":  1153,
        "Name":  "mi-NZ",
        "DisplayName":  "Maori (New Zealand)",
        "NativeName":  "Reo Māori (Aotearoa)"
    },
    {
        "LCID":  1071,
        "Name":  "mk-MK",
        "DisplayName":  "Macedonian (Former Yugoslav Republic of Macedonia)",
        "NativeName":  "македонски јазик (Македонија)"
    },
    {
        "LCID":  1100,
        "Name":  "ml-IN",
        "DisplayName":  "Malayalam (India)",
        "NativeName":  "മലയാളം (ഭാരതം)"
    },
    {
        "LCID":  1104,
        "Name":  "mn-MN",
        "DisplayName":  "Mongolian (Cyrillic, Mongolia)",
        "NativeName":  "Монгол хэл (Монгол улс)"
    },
    {
        "LCID":  2128,
        "Name":  "mn-Mong-CN",
        "DisplayName":  "Mongolian (Traditional Mongolian, PRC)",
        "NativeName":  "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ (ᠪᠦᠭᠦᠳᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠬᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠠᠷᠠᠳ ᠣᠯᠣᠰ)"
    },
    {
        "LCID":  3152,
        "Name":  "mn-Mong-MN",
        "DisplayName":  "Mongolian (Traditional Mongolian, Mongolia)",
        "NativeName":  "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ (ᠮᠤᠨᠭᠭᠤᠯ ᠣᠯᠣᠰ)"
    },
    {
        "LCID":  1148,
        "Name":  "moh-CA",
        "DisplayName":  "Mohawk (Mohawk)",
        "NativeName":  "Kanien\u0027kéha"
    },
    {
        "LCID":  1102,
        "Name":  "mr-IN",
        "DisplayName":  "Marathi (India)",
        "NativeName":  "मराठी (भारत)"
    },
    {
        "LCID":  2110,
        "Name":  "ms-BN",
        "DisplayName":  "Malay (Brunei Darussalam)",
        "NativeName":  "Bahasa Melayu (Brunei Darussalam)"
    },
    {
        "LCID":  1086,
        "Name":  "ms-MY",
        "DisplayName":  "Malay (Malaysia)",
        "NativeName":  "Bahasa Melayu (Malaysia)"
    },
    {
        "LCID":  1082,
        "Name":  "mt-MT",
        "DisplayName":  "Maltese (Malta)",
        "NativeName":  "Malti (Malta)"
    },
    {
        "LCID":  1109,
        "Name":  "my-MM",
        "DisplayName":  "Burmese (Myanmar)",
        "NativeName":  "ဗမာ (မြန်မာ)"
    },
    {
        "LCID":  1044,
        "Name":  "nb-NO",
        "DisplayName":  "Norwegian, Bokmål (Norway)",
        "NativeName":  "norsk, bokmål (Norge)"
    },
    {
        "LCID":  2145,
        "Name":  "ne-IN",
        "DisplayName":  "Nepali (India)",
        "NativeName":  "नेपाली (भारत)"
    },
    {
        "LCID":  1121,
        "Name":  "ne-NP",
        "DisplayName":  "Nepali (Nepal)",
        "NativeName":  "नेपाली (नेपाल)"
    },
    {
        "LCID":  2067,
        "Name":  "nl-BE",
        "DisplayName":  "Dutch (Belgium)",
        "NativeName":  "Nederlands (België)"
    },
    {
        "LCID":  1043,
        "Name":  "nl-NL",
        "DisplayName":  "Dutch (Netherlands)",
        "NativeName":  "Nederlands (Nederland)"
    },
    {
        "LCID":  2068,
        "Name":  "nn-NO",
        "DisplayName":  "Norwegian, Nynorsk (Norway)",
        "NativeName":  "norsk, nynorsk (Noreg)"
    },
    {
        "LCID":  4096,
        "Name":  "nqo-GN",
        "DisplayName":  "N\u0027ko (Guinea)",
        "NativeName":  "ߒߞߏ (ߖߌ߬ߣߍ߬ ߞߊ߲ߓߍ߲)"
    },
    {
        "LCID":  1132,
        "Name":  "nso-ZA",
        "DisplayName":  "Sesotho sa Leboa (South Africa)",
        "NativeName":  "Sesotho sa Leboa (Afrika Borwa)"
    },
    {
        "LCID":  1154,
        "Name":  "oc-FR",
        "DisplayName":  "Occitan (France)",
        "NativeName":  "Occitan (França)"
    },
    {
        "LCID":  1138,
        "Name":  "om-ET",
        "DisplayName":  "Oromo (Ethiopia)",
        "NativeName":  "Oromoo (Itoophiyaa)"
    },
    {
        "LCID":  1096,
        "Name":  "or-IN",
        "DisplayName":  "Odia (India)",
        "NativeName":  "ଓଡ଼ିଆ (ଭାରତ)"
    },
    {
        "LCID":  2118,
        "Name":  "pa-Arab-PK",
        "DisplayName":  "Punjabi (Islamic Republic of Pakistan)",
        "NativeName":  "پنجابی (پاکستان)"
    },
    {
        "LCID":  1094,
        "Name":  "pa-IN",
        "DisplayName":  "Punjabi (India)",
        "NativeName":  "ਪੰਜਾਬੀ (ਭਾਰਤ)"
    },
    {
        "LCID":  1045,
        "Name":  "pl-PL",
        "DisplayName":  "Polish (Poland)",
        "NativeName":  "polski (Polska)"
    },
    {
        "LCID":  1164,
        "Name":  "prs-AF",
        "DisplayName":  "Dari (Afghanistan)",
        "NativeName":  "درى (افغانستان)"
    },
    {
        "LCID":  1123,
        "Name":  "ps-AF",
        "DisplayName":  "Pashto (Afghanistan)",
        "NativeName":  "پښتو (افغانستان)"
    },
    {
        "LCID":  4096,
        "Name":  "pt-AO",
        "DisplayName":  "Portuguese (Angola)",
        "NativeName":  "português (Angola)"
    },
    {
        "LCID":  1046,
        "Name":  "pt-BR",
        "DisplayName":  "Portuguese (Brazil)",
        "NativeName":  "português (Brasil)"
    },
    {
        "LCID":  2070,
        "Name":  "pt-PT",
        "DisplayName":  "Portuguese (Portugal)",
        "NativeName":  "português (Portugal)"
    },
    {
        "LCID":  1158,
        "Name":  "qut-GT",
        "DisplayName":  "K\u0027iche (Guatemala)",
        "NativeName":  "K\u0027iche\u0027 (Guatemala)"
    },
    {
        "LCID":  1131,
        "Name":  "quz-BO",
        "DisplayName":  "Quechua (Bolivia)",
        "NativeName":  "runasimi (Qullasuyu)"
    },
    {
        "LCID":  2155,
        "Name":  "quz-EC",
        "DisplayName":  "Quechua (Ecuador)",
        "NativeName":  "runa shimi (Ecuador Suyu)"
    },
    {
        "LCID":  3179,
        "Name":  "quz-PE",
        "DisplayName":  "Quechua (Peru)",
        "NativeName":  "runasimi (Peru)"
    },
    {
        "LCID":  1047,
        "Name":  "rm-CH",
        "DisplayName":  "Romansh (Switzerland)",
        "NativeName":  "Rumantsch (Svizra)"
    },
    {
        "LCID":  2072,
        "Name":  "ro-MD",
        "DisplayName":  "Romanian (Moldova)",
        "NativeName":  "română (Republica Moldova)"
    },
    {
        "LCID":  1048,
        "Name":  "ro-RO",
        "DisplayName":  "Romanian (Romania)",
        "NativeName":  "română (România)"
    },
    {
        "LCID":  1049,
        "Name":  "ru-RU",
        "DisplayName":  "Russian (Russia)",
        "NativeName":  "русский (Россия)"
    },
    {
        "LCID":  1159,
        "Name":  "rw-RW",
        "DisplayName":  "Kinyarwanda (Rwanda)",
        "NativeName":  "Kinyarwanda (Rwanda)"
    },
    {
        "LCID":  1103,
        "Name":  "sa-IN",
        "DisplayName":  "Sanskrit (India)",
        "NativeName":  "संस्कृत (भारतम्)"
    },
    {
        "LCID":  1157,
        "Name":  "sah-RU",
        "DisplayName":  "Sakha (Russia)",
        "NativeName":  "Саха (Россия)"
    },
    {
        "LCID":  2137,
        "Name":  "sd-Arab-PK",
        "DisplayName":  "Sindhi (Islamic Republic of Pakistan)",
        "NativeName":  "سنڌي (پاکستان)"
    },
    {
        "LCID":  3131,
        "Name":  "se-FI",
        "DisplayName":  "Sami, Northern (Finland)",
        "NativeName":  "davvisámegiella (Suopma)"
    },
    {
        "LCID":  1083,
        "Name":  "se-NO",
        "DisplayName":  "Sami, Northern (Norway)",
        "NativeName":  "davvisámegiella (Norga)"
    },
    {
        "LCID":  2107,
        "Name":  "se-SE",
        "DisplayName":  "Sami, Northern (Sweden)",
        "NativeName":  "davvisámegiella (Ruoŧŧa)"
    },
    {
        "LCID":  1115,
        "Name":  "si-LK",
        "DisplayName":  "Sinhala (Sri Lanka)",
        "NativeName":  "සිංහල (ශ්‍රී ලංකා)"
    },
    {
        "LCID":  1051,
        "Name":  "sk-SK",
        "DisplayName":  "Slovak (Slovakia)",
        "NativeName":  "slovenčina (Slovenská republika)"
    },
    {
        "LCID":  1060,
        "Name":  "sl-SI",
        "DisplayName":  "Slovenian (Slovenia)",
        "NativeName":  "slovenščina (Slovenija)"
    },
    {
        "LCID":  6203,
        "Name":  "sma-NO",
        "DisplayName":  "Sami, Southern (Norway)",
        "NativeName":  "åarjelsaemiengïele (Nöörje)"
    },
    {
        "LCID":  7227,
        "Name":  "sma-SE",
        "DisplayName":  "Sami, Southern (Sweden)",
        "NativeName":  "åarjelsaemiengïele (Sveerje)"
    },
    {
        "LCID":  4155,
        "Name":  "smj-NO",
        "DisplayName":  "Sami, Lule (Norway)",
        "NativeName":  "julevusámegiella (Vuodna)"
    },
    {
        "LCID":  5179,
        "Name":  "smj-SE",
        "DisplayName":  "Sami, Lule (Sweden)",
        "NativeName":  "julevusámegiella (Svierik)"
    },
    {
        "LCID":  9275,
        "Name":  "smn-FI",
        "DisplayName":  "Sami, Inari (Finland)",
        "NativeName":  "sämikielâ (Suomâ)"
    },
    {
        "LCID":  8251,
        "Name":  "sms-FI",
        "DisplayName":  "Sami, Skolt (Finland)",
        "NativeName":  "sää´mǩiõll (Lää´ddjânnam)"
    },
    {
        "LCID":  4096,
        "Name":  "sn-Latn-ZW",
        "DisplayName":  "Shona (Latin, Zimbabwe)",
        "NativeName":  "chiShona (Latin, Zimbabwe)"
    },
    {
        "LCID":  1143,
        "Name":  "so-SO",
        "DisplayName":  "Somali (Somalia)",
        "NativeName":  "Soomaali (Soomaaliya)"
    },
    {
        "LCID":  1052,
        "Name":  "sq-AL",
        "DisplayName":  "Albanian (Albania)",
        "NativeName":  "Shqip (Shqipëria)"
    },
    {
        "LCID":  7194,
        "Name":  "sr-Cyrl-BA",
        "DisplayName":  "Serbian (Cyrillic, Bosnia and Herzegovina)",
        "NativeName":  "српски (Босна и Херцеговина)"
    },
    {
        "LCID":  3098,
        "Name":  "sr-Cyrl-CS",
        "DisplayName":  "Serbian (Cyrillic, Serbia and Montenegro (Former))",
        "NativeName":  "српски (Србија и Црна Гора (Бивша))"
    },
    {
        "LCID":  12314,
        "Name":  "sr-Cyrl-ME",
        "DisplayName":  "Serbian (Cyrillic, Montenegro)",
        "NativeName":  "српски (Црна Гора)"
    },
    {
        "LCID":  10266,
        "Name":  "sr-Cyrl-RS",
        "DisplayName":  "Serbian (Cyrillic, Serbia)",
        "NativeName":  "српски (Србија)"
    },
    {
        "LCID":  6170,
        "Name":  "sr-Latn-BA",
        "DisplayName":  "Serbian (Latin, Bosnia and Herzegovina)",
        "NativeName":  "srpski (Bosna i Hercegovina)"
    },
    {
        "LCID":  2074,
        "Name":  "sr-Latn-CS",
        "DisplayName":  "Serbian (Latin, Serbia and Montenegro (Former))",
        "NativeName":  "srpski (Srbija i Crna Gora (Bivša))"
    },
    {
        "LCID":  11290,
        "Name":  "sr-Latn-ME",
        "DisplayName":  "Serbian (Latin, Montenegro)",
        "NativeName":  "srpski (Crna Gora)"
    },
    {
        "LCID":  9242,
        "Name":  "sr-Latn-RS",
        "DisplayName":  "Serbian (Latin, Serbia)",
        "NativeName":  "srpski (Srbija)"
    },
    {
        "LCID":  1072,
        "Name":  "st-ZA",
        "DisplayName":  "Southern Sotho (South Africa)",
        "NativeName":  "Sesotho (South Africa)"
    },
    {
        "LCID":  2077,
        "Name":  "sv-FI",
        "DisplayName":  "Swedish (Finland)",
        "NativeName":  "svenska (Finland)"
    },
    {
        "LCID":  1053,
        "Name":  "sv-SE",
        "DisplayName":  "Swedish (Sweden)",
        "NativeName":  "svenska (Sverige)"
    },
    {
        "LCID":  1089,
        "Name":  "sw-KE",
        "DisplayName":  "Kiswahili (Kenya)",
        "NativeName":  "Kiswahili (Kenya)"
    },
    {
        "LCID":  1114,
        "Name":  "syr-SY",
        "DisplayName":  "Syriac (Syria)",
        "NativeName":  "ܣܘܪܝܝܐ (ܣܘܪܝܐ)"
    },
    {
        "LCID":  1097,
        "Name":  "ta-IN",
        "DisplayName":  "Tamil (India)",
        "NativeName":  "தமிழ் (இந்தியா)"
    },
    {
        "LCID":  2121,
        "Name":  "ta-LK",
        "DisplayName":  "Tamil (Sri Lanka)",
        "NativeName":  "தமிழ் (இலங்கை)"
    },
    {
        "LCID":  1098,
        "Name":  "te-IN",
        "DisplayName":  "Telugu (India)",
        "NativeName":  "తెలుగు (భారత దేశం)"
    },
    {
        "LCID":  1064,
        "Name":  "tg-Cyrl-TJ",
        "DisplayName":  "Tajik (Cyrillic, Tajikistan)",
        "NativeName":  "Тоҷикӣ (Тоҷикистон)"
    },
    {
        "LCID":  1054,
        "Name":  "th-TH",
        "DisplayName":  "Thai (Thailand)",
        "NativeName":  "ไทย (ไทย)"
    },
    {
        "LCID":  2163,
        "Name":  "ti-ER",
        "DisplayName":  "Tigrinya (Eritrea)",
        "NativeName":  "ትግርኛ (ኤርትራ)"
    },
    {
        "LCID":  1139,
        "Name":  "ti-ET",
        "DisplayName":  "Tigrinya (Ethiopia)",
        "NativeName":  "ትግርኛ (ኢትዮጵያ)"
    },
    {
        "LCID":  1090,
        "Name":  "tk-TM",
        "DisplayName":  "Turkmen (Turkmenistan)",
        "NativeName":  "Türkmen dili (Türkmenistan)"
    },
    {
        "LCID":  2098,
        "Name":  "tn-BW",
        "DisplayName":  "Setswana (Botswana)",
        "NativeName":  "Setswana (Botswana)"
    },
    {
        "LCID":  1074,
        "Name":  "tn-ZA",
        "DisplayName":  "Setswana (South Africa)",
        "NativeName":  "Setswana (Aforika Borwa)"
    },
    {
        "LCID":  1055,
        "Name":  "tr-TR",
        "DisplayName":  "Turkish (Turkey)",
        "NativeName":  "Türkçe (Türkiye)"
    },
    {
        "LCID":  1073,
        "Name":  "ts-ZA",
        "DisplayName":  "Tsonga (South Africa)",
        "NativeName":  "Xitsonga (South Africa)"
    },
    {
        "LCID":  1092,
        "Name":  "tt-RU",
        "DisplayName":  "Tatar (Russia)",
        "NativeName":  "Татар (Россия)"
    },
    {
        "LCID":  2143,
        "Name":  "tzm-Latn-DZ",
        "DisplayName":  "Tamazight (Latin, Algeria)",
        "NativeName":  "Tamazight (Djazaïr)"
    },
    {
        "LCID":  4191,
        "Name":  "tzm-Tfng-MA",
        "DisplayName":  "Central Atlas Tamazight (Tifinagh, Morocco)",
        "NativeName":  "ⵜⴰⵎⴰⵣⵉⵖⵜ (ⵍⵎⵖⵔⵉⴱ)"
    },
    {
        "LCID":  1152,
        "Name":  "ug-CN",
        "DisplayName":  "Uyghur (PRC)",
        "NativeName":  "ئۇيغۇرچە (جۇڭخۇا خەلق جۇمھۇرىيىتى)"
    },
    {
        "LCID":  1058,
        "Name":  "uk-UA",
        "DisplayName":  "Ukrainian (Ukraine)",
        "NativeName":  "українська (Україна)"
    },
    {
        "LCID":  2080,
        "Name":  "ur-IN",
        "DisplayName":  "Urdu (India)",
        "NativeName":  "اردو (بھارت)"
    },
    {
        "LCID":  1056,
        "Name":  "ur-PK",
        "DisplayName":  "Urdu (Islamic Republic of Pakistan)",
        "NativeName":  "اُردو (پاکستان)"
    },
    {
        "LCID":  2115,
        "Name":  "uz-Cyrl-UZ",
        "DisplayName":  "Uzbek (Cyrillic, Uzbekistan)",
        "NativeName":  "Ўзбекча (Ўзбекистон Республикаси)"
    },
    {
        "LCID":  1091,
        "Name":  "uz-Latn-UZ",
        "DisplayName":  "Uzbek (Latin, Uzbekistan)",
        "NativeName":  "O\u0027zbekcha (O\u0027zbekiston Respublikasi)"
    },
    {
        "LCID":  1066,
        "Name":  "vi-VN",
        "DisplayName":  "Vietnamese (Vietnam)",
        "NativeName":  "Tiếng Việt (Việt Nam)"
    },
    {
        "LCID":  1160,
        "Name":  "wo-SN",
        "DisplayName":  "Wolof (Senegal)",
        "NativeName":  "Wolof (Senegaal)"
    },
    {
        "LCID":  1076,
        "Name":  "xh-ZA",
        "DisplayName":  "isiXhosa (South Africa)",
        "NativeName":  "isiXhosa (uMzantsi Afrika)"
    },
    {
        "LCID":  1130,
        "Name":  "yo-NG",
        "DisplayName":  "Yoruba (Nigeria)",
        "NativeName":  "Yoruba (Nigeria)"
    },
    {
        "LCID":  4096,
        "Name":  "zgh-Tfng-MA",
        "DisplayName":  "Standard Moroccan Tamazight (Tifinagh, Morocco)",
        "NativeName":  "ⵜⴰⵎⴰⵣⵉⵖⵜ (ⵍⵎⵖⵔⵉⴱ)"
    },
    {
        "LCID":  2052,
        "Name":  "zh-CN",
        "DisplayName":  "Chinese (Simplified, PRC)",
        "NativeName":  "中文(中华人民共和国)"
    },
    {
        "LCID":  3076,
        "Name":  "zh-HK",
        "DisplayName":  "Chinese (Traditional, Hong Kong S.A.R.)",
        "NativeName":  "中文(香港特別行政區)"
    },
    {
        "LCID":  5124,
        "Name":  "zh-MO",
        "DisplayName":  "Chinese (Traditional, Macao S.A.R.)",
        "NativeName":  "中文(澳門特別行政區)"
    },
    {
        "LCID":  4100,
        "Name":  "zh-SG",
        "DisplayName":  "Chinese (Simplified, Singapore)",
        "NativeName":  "中文(新加坡)"
    },
    {
        "LCID":  1028,
        "Name":  "zh-TW",
        "DisplayName":  "Chinese (Traditional, Taiwan)",
        "NativeName":  "中文(台灣)"
    },
    {
        "LCID":  1077,
        "Name":  "zu-ZA",
        "DisplayName":  "isiZulu (South Africa)",
        "NativeName":  "isiZulu (iNingizimu Afrika)"
    }
]

export class CultureInfo{
    name:string;
    lcid:number;
    nativeName:string;    
    displayName:string;

    constructor(config:CultureInfoConfig){
        let cultureInfo;
        if (config.lcid){
            cultureInfo = lcids.find((entry)=>{return entry.LCID == config.lcid})            
        }else if (config.name){            
            cultureInfo = lcids.find((entry)=>{return entry.Name == config.name}) 
        }else{
            throw new Error("Either culture name or lcid is required.")
        }

        if (cultureInfo){
            this.lcid = cultureInfo.LCID;
            this.name = cultureInfo.Name;
            this.nativeName = cultureInfo.NativeName;
            this.displayName = cultureInfo.DisplayName;
        }
        else{
            throw new Error("Could not find culture info")
        }
    }
}

export class CultureInfoConfig{
    name?:string;
    lcid?:number;
}
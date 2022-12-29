'systemUtil.CloseProcessByName ("firefox.exe")
'systemUtil.Run ("C:\Program Files\Mozilla Firefox\firefox.exe")

'Browser("Home - Advantage Bank").Navigate "https://advantageonlinebanking.com/"

Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("firstName").Set "aaa12" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("lastName").Set "bbb12" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("email").Set "aa12@b.com" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "abb12" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "63ad71261d13b1f9351c5b80486d086e52e31048c2a0" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("confirmPass").SetSecure "63ad712bd60657aa5c989f1e8d69defa2c8f48141f20" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Click @@ script infofile_;_ZIP::ssf8.xml_;_
 @@ script infofile_;_ZIP::ssf19.xml_;_

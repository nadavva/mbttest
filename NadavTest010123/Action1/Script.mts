Function RandomString(length)
  Dim chars, randString
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  Randomize
  For i = 1 To length
    randString = randString & Mid(chars, Int(Rnd() * Len(chars)) + 1, 1)
  Next
  RandomString = randString
End Function

Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Click
Dim firstName
firstName = "FN_" + RandomString(8)
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("firstName").Set firstName
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("lastName").Set "LN_" +  RandomString(5)
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("email").Set firstName + "@abc.com"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set firstName @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "63b1de805687f7a4eb0b148e29bb6cbb4fe470d425ac" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("confirmPass").SetSecure "63b1de8580290869a3c4e258155ad666f73ec54bc9de" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Click @@ script infofile_;_ZIP::ssf8.xml_;_

wait 3 @@ script infofile_;_ZIP::ssf13.xml_;_

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Exist Then
	Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebButton("Login").Click @@ script infofile_;_ZIP::ssf10.xml_;_
	Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebEdit("username").Set firstName @@ script infofile_;_ZIP::ssf11.xml_;_
	Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebEdit("password").SetSecure "63b1e427f012fdda0292c4639e7491a7586d3c7cafd4" @@ script infofile_;_ZIP::ssf12.xml_;_
	Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebButton("Login_2").Click
End If
 @@ script infofile_;_ZIP::ssf9.xml_;_

'Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").WebButton("Login").Click
'Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").WebEdit("username").Set "FN_XRAD5L5h111"
'Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").WebEdit("password").SetSecure "63b1deb464428e30316a25a998fa591e507f66c312cc"
'Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").WebButton("Login_2").Click
'Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").WebEdit("password").Submit


Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").Link("Accounts").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").WebButton("New Transfer").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Accounts - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.name").Set "einav" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Accounts - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.iban").Set "12345" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Accounts - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bic").Set "555" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Accounts - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bankName").Set "Poalim" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Accounts - Advantage Bank").Page("New Transfer - Advantage").WebNumber("amount").Set "3456" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Accounts - Advantage Bank").Page("New Transfer - Advantage").WebEdit("description").Set "enjoy" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Accounts - Advantage Bank").Page("New Transfer - Advantage").WebButton("Send").Click @@ script infofile_;_ZIP::ssf9.xml_;_

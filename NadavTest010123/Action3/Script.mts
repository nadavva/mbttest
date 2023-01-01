Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Accounts").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Open new account").Click @@ hightlight id_;_9_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Advantage Bank — Mozilla").InsightObject("InsightObject").Click
Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebList("Currency").Select "ILS" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebEdit("name").Set "555" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Create").Click @@ script infofile_;_ZIP::ssf5.xml_;_

$.get("mxml/MozartPianoSonata.xml", function (data) { console.log(ScoreScribe.Parse.xml2json(data)); })

ScoreScribe.Parse.xml2json($(fr.result)[2])
define(['app/scorescribe.parse'], function (parse) {
    var ss = ScoreScribe = {};
    
    // Init
    (function () {
        // Assign modules
        ss.Parse = parse;

        // Contine...
        $("#mxmlFileInput").change(function () {
            var fr = new FileReader();
            fr.onload = function () {
                ss.scoreJSON = ss.Parse.xml2json($(fr.result)[2]);
            };
            fr.readAsText(this.files[0]);
        });
    }());

    return ss;
});
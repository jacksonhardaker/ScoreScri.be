define(['app/scorescribe.parse', 'app/scorescribe.load', 'app/scorescribe.score'], function (parse, load, score) {
    var ss = ScoreScribe = {};
    
    // Init
    (function () {
        // Assign modules
        ss.Parse = parse;
        ss.Load = load;
        ss.Score = score;

        // Init...
        ss.Parse.Init(ss);
        ss.Score.Init(ss);
        ss.Load.Init(ss, "mxmlFileInput");
    }());

    return ss;
});
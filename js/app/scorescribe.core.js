define(['app/scorescribe.parse'], function (parse) {
    var ss = ScoreScribe = {};

    // Init
    (function () {
        ss.Parse = parse;
    }());

    return ss;
});
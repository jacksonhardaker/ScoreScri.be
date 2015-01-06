define(['app/scorescribe.score.header', 'app/scorescribe.score.part'], function (header, part) {
    var ss = {};
    var json = {};

    var Init = function (scorescribe) {
        ss = scorescribe;

        // Init
        ss.Score.Header.Init(ss);
    };

    var render = function () {
        $("#scorescribe-container").empty();
        $("#scorescribe-container").append(ss.Score.Header.generate());
        $("#scorescribe-container").append(ss.Score.Part.generate());
    };

    /* Return object */
    return {
        Init: Init,
        JSON: json,
        Header: header,
        Part: part,
        render: render
    }
});
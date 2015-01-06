define([], function () {
    var ss = {};
    var Init = function (scorescribe) {
        ss = scorescribe;
    };

    var generate = function () {
        if (ss.Score.JSON.part)
        {

            var parts = _.map(ss.Score.JSON.part, generatePart);
        }
    };

    var generatePart = function (part) {

    };

    return {
        Init: Init,
        generate: generate
    }
});
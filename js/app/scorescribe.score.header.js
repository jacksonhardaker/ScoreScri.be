define([], function () {
    var ss = {};
    var Init = function (scorescribe) {
        ss = scorescribe;
    };

    var generate = function () {
        var headerEntity = $("<div/>");

        var hasWorkHeader = false;
        if (ss.Score.JSON.work) {
            headerEntity.append(["<h1>", ss.Score.JSON.work.work_title, " ", ss.Score.JSON.work.work_number, "</h1>"].join(""));
            hasWorkHeader = true;
        }

        var movementTag = "h2";
        if (!hasWorkHeader)
        {
            movementTag = "h1";
        }
        headerEntity.append(["<", movementTag, ">", ss.Score.JSON.movement_number, " ", ss.Score.JSON.movement_title, "</", movementTag, ">"].join(""));

        if (ss.Score.JSON.identification)
        {
            headerEntity.append(["<h3>", ss.Score.JSON.identification.creator, "</h3>"].join(""));
        }

        return headerEntity;
    };

    return {
        Init: Init,
        render: generate
    }
});
//Filename: boilerplate.js

define([], function () {
    var ss = {};
    var Init = function (scorescribe) {
        ss = scorescribe;
    };

    return {
        Init: Init
    }
});
var score = {
    "work":
        {
            "work_number": "D. 911",
            "work_title": "Winterreise"
        },
    "movement_number": "22",
    "movement_title": "Mut",
    "identification":
        {
            "creator": "Everyone Else"
        },
    "part_list":
        {
            "score_part":
                {
                    "part_name": "Music",
                    "id": "P1"
                }
        },
    "part":
        {
            "measure":
                [{
                    "attributes":
                        {
                            "divisions": "1",
                            "key": { "fifths": "0" },
                            "time": { "beats": "4", "beat_type": "4" },
                            "clef": { "sign": "G", "line": "2" }
                        },
                    "note":
                        {
                            "pitch": { "step": "C", "octave": "4" },
                            "duration": "4",
                            "type": "whole"
                        },
                    "number": "1"
                },
                {
                    "attributes":
                        {
                            "divisions": "2"
                        },
                    "note":
                        [{
                            "pitch": { "step": "C", "alter": "1", "octave": "4" },
                            "duration": "2",
                            "type": "half"
                        },
                        {
                            "pitch": { "step": "G", "octave": "4" },
                            "duration": "2",
                            "type": "half"
                        }],
                    "number": "2"
                }], "id": "P1"
        }, "version": "3.0"
};

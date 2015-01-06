define(function () {
	var ss = {};
	var Init = function (scorescribe, fileInputId) {
		ss = scorescribe;

		$("#" + fileInputId).change(function () {
			loadFromFileInput(fileInputId);
		});
	};

	/* Loads an mxml file from a file input, and converts to a JSON object. */
	var loadFromFileInput = function (id) {
			var fr = new FileReader();
			fr.onload = function () {
				ss.Score.JSON = ss.Parse.xml2json($(fr.result)[2]);
			};
			$("#" + id)
			fr.readAsText(document.getElementById(id).files[0]);
	};

	/* Return object */
	return {
		Init: Init,
		loadFromFileInput: loadFromFileInput
	}
});
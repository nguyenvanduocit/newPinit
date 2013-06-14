	var $defaultSource_text;

	var defaultSource;

	$(document).ready(function() {

		//Now that DOM has loaded fill variables for toggles 
		$defaultSource_text = $("._defaultSource_text");
		//Internationalization, set header title
		internationalization();

		restoreOptions();

		saveOptions();
		toggleButtons();

	});

	var internationalization = function() {
		//Set text from internationalization file

		var optionsTitle = chrome.i18n.getMessage('optionsTitle');
		document.title = optionsTitle;

		$('#header').text(optionsTitle);
		$('#defaultSource_text').text(chrome.i18n.getMessage("strDefaultURL"));

		$('#saveButton').text(chrome.i18n.getMessage("saveButton"));
	}

	var saveOptions = function() {
		$("#saveButton").click(function() {
			defaultSource = $defaultSource_text.val();
			if(localStorage["defaultSource"] != defaultSource)
			{
				localStorage["defaultSource"] = defaultSource;
			}

			var status = $('#status');

			// Update status to let user know options were saved.
			status.text(chrome.i18n.getMessage("savedMsg"));

			setTimeout(function() {
				status.text('');
			}, 600);

		});
	}

	//Restores checkbox state to saved value from localStorage.
	var restoreOptions = function() {

		//Load variables from chrome
		var defaultSource = localStorage["defaultSource"];
		if(defaultSource == undefined)
		{
			defaultSource = "http://muatocroi.com";
		}

		$defaultSource_text.val(defaultSource);	

	}
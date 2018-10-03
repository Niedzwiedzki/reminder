  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
      if (request.todo == "showReminder"){

        // parameters of notification
        var notifOptions = {
            type: "basic",
            iconUrl: "icon48.png",
            title: "Timesheet",
            message: "Please, submit your timesheet"
        };
        //function displying notification
        chrome.notifications.create('limitNotif', notifOptions);

        // parameters of popup window
        var createData = {
            "url": "https://onecognizant.cognizant.com/",
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };

        //function displying popup
        chrome.windows.create(createData, function(){});

        //variable with full date which will prevent the displaying of the reminder more then once a day 
        var todaysDate = new Date().toLocaleDateString()

        //adding a variable with full date to the storage to prevent displaying of the reminder more then once a day
        chrome.storage.sync.set({'date': todaysDate}, function() {
          message('Settings saved');
        });
      }
  });

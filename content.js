//variables checking today's date
var dateToday = new Date();
var today = dateToday.getDay()
var todaysMonth = dateToday.getMonth()

//variables checking tomorrow's date
var dateTomorrow = new Date();
dateTomorrow.setDate(dateToday.getDate()+1);
var tomorrowsMonth = dateTomorrow.getMonth();

//variable getting full date to find out if the reminder was shown already
var fullDate = new Date().toLocaleDateString()

chrome.storage.sync.get(['date'], function(result) {
  if((today == 5 || todaysMonth != tomorrowsMonth) && result.date != fullDate){
    chrome.runtime.sendMessage({todo: "showReminder"});
  }
});

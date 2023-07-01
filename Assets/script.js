$(function () {
  
  // renders local storage and displays it on the page
  function loadLocalStorage(){  
    // finds every time block class
    $('.time-block').each(function(){
      // finds the text area for each hour
      var textarea = $(this).children("textarea");
      // finds the local storage key for everything in local storage
      var key = $(this).attr("id") + " " + dayjs().format("M/DD/YY");
      // gets everything in local storage
      var task = localStorage.getItem(key);
      // inserts text for each hour theres something in local storage 
      textarea.text(task);
    }) 
  }
  
  // function to display current day 
  function displayTime(){
  // finds time display element w/ in HTML 
  var timeDisplayEl =$("#currentDay");
  // finds and sets current time to the correct format
  var currentTime = dayjs().format("dddd, MMM DD, YYYY");
  // renders time on page
  timeDisplayEl.text(currentTime);
  }
  
  // function to save the user text for individual hour blocks
  function saveUserInput (){
  //gets div id for hour clicked on 
  var hourClicked = $(this).parent().attr("id");
  // sets value for local storage key. is is the hour clicked on the day
  var saveKey = hourClicked + " " + dayjs().format("M/DD/YY");
  // gets text value user inputs for current time
  var textInput = $(this).parent().children("textarea").val();
  // Saves user input into local storage.
  localStorage.setItem(saveKey,textInput);
  }

  // function changes row color depending on current time  
  function timeBlockColor(){
    // gets the current hour and turns it into an integer
    var hourTextEl = parseInt(dayjs().format("HH"));
    $('.time-block').each(function() {
      var blockHour = parseInt(
        $(this)
          // gets each "hour-xx" value
          .attr('id')
          // removes "hour-" from Div IDs leaving only the number 
          .split('-')[1])
          // adds the class of "past", "present", or "future". Uses If else statement to compare
        $(this).addClass(function (){
          if (blockHour < hourTextEl){
            return "past";
          } else if (blockHour === hourTextEl){
            return "present";
            } else {
              return "future";
            }}
          )
      });    
  }  
  displayTime(); 
  timeBlockColor();
  loadLocalStorage();
  $("button").click(saveUserInput);
});

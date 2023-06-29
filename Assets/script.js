$(function () {
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // add function to get local storage and renders it on sheet when page is refreshed


  var timeDisplayEl =$("#currentDay");
   function displayTime(){
    var currentTime = dayjs().format("dddd, MMM DD, YYYY");
    timeDisplayEl.text(currentTime);
   }
   displayTime();

   function saveUserInput (){
    //gets div id for hour clicked on 
    var hourClicked = $(this).parent().attr("id"); 
    console.log(hourClicked);
    // gets text value user inputs for current time
    var textInput = $(this).parent().children("textarea").val();
    console.log(textInput);

    // Saves user input into local storage. Name is Hour Name ID and the day so user inputs the text so
    //they can look back to previous days if needed
    localStorage.setItem(hourClicked + " " + dayjs().format("M/DD/YY"),JSON.stringify(textInput));
   }

  // function changes row color depending on current time  
  function timeBlockColor(){
    // for each time block class it will pick up all the Div IDs
    $('.time-block').each(function() {
      var blockHour = parseInt(
        $(this)
          .attr('id')
          // removes "hour-" from Div IDs leaving only the number 
          .split('-')[1]
      );
      // converts string into integer so it can be compared to the Div's hour IDs
      var hourTextConversion = parseInt(dayjs().format("HH"));
      // if the block hour is in the past
      if (blockHour < hourTextConversion){
        $('.time-block').addClass("past");
        $('.time-block').removeClass("present");
        $('.time-block').removeClass("future");
        // if block hour is in the future
      } else if (blockHour > hourTextConversion){
        $('.time-block').addClass("future");
        $('.time-block').removeClass("present");
        $('.time-block').removeClass("past");
        // if the block hour = the current hour
      } else {
        $('.time-block').addClass("present");
        $('.time-block').removeClass("future");
        $('.time-block').removeClass("past");
      }
    });
  }  
   timeBlockColor();
   $("button").click(saveUserInput);
});

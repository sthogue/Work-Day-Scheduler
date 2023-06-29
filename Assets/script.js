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


  // add event listener to save data for each hour
  // add function to apply style for hour block
  // add function to get local storage


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

   
    
   function timeBlockColor(){
    // declare variables
    // get current time
    var currentHour = dayjs()
    var timeBlock = $(".time-block")
    var timeBlockVal= timeBlock.attr("id")
    var timeBlockValNum = timeBlockVal.each(function (index){
      console.log(index.text().replace("hour-", ""));
    });


    
    console.log(timeBlock)
    console.log(timeBlockVal);
    // get all time blocks
    // if in past change class to "past"
    // if current time block change class to "present"
    // if in future change class to future

   }
   timeBlockColor();
   $("button").click(saveUserInput);
});

$(function () {
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // add function to get local storage and renders it on sheet when page is refreshed

  function loadLocalStorage(){
    
  }

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
    // gets the current hour and turns it into an integer
    var hourTextEl = parseInt(dayjs().format("HH"));
    $('.time-block').each(function() {
      var blockHour = parseInt(
        $(this)
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
        console.log(blockHour);
        console.log(hourTextEl);
      });    
  }  
   timeBlockColor();
   $("button").click(saveUserInput);
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
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
   $("button").click(saveUserInput);
});

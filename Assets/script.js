// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
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
  //
  // TODO: Add code to display the current date in the header of the page. COMPLETE

//  ```md
//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner COMPLETE
//THEN the current day is displayed at the top of the calendar COMPLETE
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist
//```

// VARIABLES AND CALLS GO HERE.
var currentDate = dayjs();

var today = currentDate.day();
var date = dayjs().get('date');

var currentHour = dayjs().get('hour')

var dayVisual = document.getElementById('dayVisual')
var dateFormat = currentDate.format('DD-MM-YYYY');
console.log('Current dayJS time is: ' + dateFormat);
var weekVariable = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

console.log('Day is: ' + weekVariable[today]);
console.log('Date is: ' + date);
dayVisual.textContent = weekVariable[today] + ': ' + dateFormat;

hoursArray = []
for (let i = 9; i <= 17; i++) {
  hoursArray.push(`hour-${i}`);
  // console.log(hoursArray[i - 9])
}
// Create a function that will check for the current hour. If lesser, make red, if equal, make yellow. If greater, make green.

// hourArray = 
// ['#hour-9',
// '#hour-10',
// '#hour-11',
// '#hour-12',
// '#hour-13',
// '#hour-14',
// '#hour-15',
// '#hour-16',
// '#hour-17'];
// I could make a for loop for the above to reduce the amount of lines. Go back and change if I have time.

  function applyTimeColor(){
    for (let i = 9; i <= 17; i++){
      //Below is still undefined.
      var dayColor = document.getElementById(hoursArray[i]);
      console.log('AAA: ' + hoursArray[i])
      if (hoursArray[i] < currentHour){
    //PAST
        console.log('Current time is: ' + currentHour);
        dayColor.addClass('past')
       } else if (hoursArray[i] === currentHour){
        //PRESENT
        console.log('Current time is: ' + currentHour);
        dayColor.addClass('present')
    
       } else {
        //FUTURE
        console.log('Current time is: ' + currentHour);
        dayColor.addClass('future')
       }
      }
    }


  applyTimeColor();


// Save in local storage function.

// Logic will work as follows. There will be a div in the HTML for each hour between
// 9-5. I will then implement a Javascript/jquery function that will check on the
// current time. If the assigned value of the div is less than the current time
// (reminder to implement a time check) then it will be given the Red class.
// There will need ot be a variable checking on the current minutes. This will correspond
// to the yellow box. All other will be green. Remember to research and figure ouit the
// "This' variable that keeps being talked about."

//Reminder $ means function. When you work on this, open jQuery library for syntax. You can simplify Javascript by a ton.
//.hide .hover .click .dblclick .mouseout are some examples. Also look up the "This" stuff cause that means something. 
//Does it mean, do "this"? Also every line of code within a {} needs a ;
$(document).ready(function(){
  $('.save-button').click(function() {
    console.log("button clicked");
  });
})

});
//The function above ensures that this is loaded before the website gets rendered.

//For the function above, this will our get element and click function in one thanks to jquery.
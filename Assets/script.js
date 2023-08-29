
$(document).ready(function () {

// VARIABLES AND CALLS GO HERE.
var currentDate = dayjs();
console.log('DAYJS IS: ' + currentDate)
var today = currentDate.day();
var date = dayjs().get('date');
var currentHour = dayjs().get('hour')
var dayVisual = document.getElementById('dayVisual')
var dateFormat = currentDate.format('DD-MM-YYYY');
var weekVariable = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
dayVisual.textContent = weekVariable[today] + ': ' + dateFormat;
userSchedualeItem = []
hoursArray = []
for (let i = 9; i <= 17; i++) {
  hoursArray.push({name: `hour-${i}`, hourX: i});
  userSchedualeItem.push(`log-${i}`);
  // Stumbled across this video via a StackOverflow article: https://www.youtube.com/watch?v=jO4TNhNNeYs
  // I would highly recommend adding ` to the curriculum as it seems to be a very useful feature.
  // console.log(hoursArray[i - 9].name)
  // console.log(hoursArray[i - 9].hourX)
  // console.log(userSchedualeItem[i - 9])
}

  function applyTimeColor(){
    for (let i = 0; i < hoursArray.length; i++){
      var dayColor = document.getElementById(hoursArray[i].name);
      // console.log('AAA: ' + hoursArray[i].name)
      if (hoursArray[i].hourX < currentHour){
        //PAST
        // console.log('Current time is: ' + currentHour);
        dayColor.classList.add('past')
       } else if (hoursArray[i].hourX === currentHour){
        //PRESENT
        // console.log('Current time is: ' + currentHour);
        dayColor.classList.add('present') 
       } else {
        //FUTURE
        // console.log('Current time is: ' + currentHour);
        dayColor.classList.add('future')
       }
      }
    }

  applyTimeColor();
// Save in local storage function.

function getlogs(){
  $('#hour-9 .description').val(localStorage.getItem('namehour-9'));
  $('#hour-10 .description').val(localStorage.getItem('namehour-10'));
  $('#hour-11 .description').val(localStorage.getItem('namehour-11'));
  $('#hour-12 .description').val(localStorage.getItem('namehour-12'));
  $('#hour-13 .description').val(localStorage.getItem('namehour-13'));
  $('#hour-14 .description').val(localStorage.getItem('namehour-14'));
  $('#hour-15 .description').val(localStorage.getItem('namehour-15'));
  $('#hour-16 .description').val(localStorage.getItem('namehour-16'));
  $('#hour-17 .description').val(localStorage.getItem('namehour-17'));
}

getlogs();

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
  $('.save-button').click(function(event){
    console.log('this: ' + this)
    let parent = $(this).parent();
    // The above applies logic to all parents (button) remember this.
    let logValue = parent.find('.description').val();
    let timeValue = parent.attr('id');
    console.log('logValue:' + logValue);
    console.log('timeValue: ' + timeValue);
    let uniqueNameKeyValue = 'name' + timeValue;
    localStorage.setItem(uniqueNameKeyValue, logValue);
    localStorage.setItem('clock', timeValue);
  });
})

// The above does not pass any data. Fix.

});
//The function above ensures that this is loaded before the website gets rendered.
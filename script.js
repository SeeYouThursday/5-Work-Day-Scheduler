// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let ids = "";
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // const $saveBtn = $(".saveBtn");
  // $saveBtn.on("click", function (event) {
  //   event.stopPropagation();
  //   let $parentID = $(this).parent().attr("id");
  //   // returns the id of the parent (time of day div)
  //   let $task = $(this).prev(this);
  //   let $taskValue = $task.val();
  //   console.log($taskValue); //works
  //   // grabs value entered in text area
  //   // how can I future proof this in case the position of textarea changes later?
  //   //   let scheduledTask = {
  //   //     task1: {
  //   //       task: $taskValue,
  //   //       time: $parentID,
  //   //     },
  //   //   };
  //   //   console.log(scheduledTask);
  //   //   // consider a different approach to saving to LS
  //   //   let stringTask = JSON.stringify(scheduledTask);
  //   //   localStorage.setItem("stringTask", stringTask);
  // });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  const today = dayjs();
  // current hour variable
  currentHour = today.format("[h]our-H");
  console.log(currentHour); // works
  // if div's id contains number less than current hour, add class of past
  const $timeBlock = $(".time-block");
  $timeBlock.each(function () {
    const $this = $(this);
    let $thisAttr = $this.attr("id");
    console.log($thisAttr);
    if ($thisAttr === currentHour) {
      $this.addClass("present");
    } else if ($thisAttr < currentHour || $thisAttr === "hour-9") {
      // sketchy fix for hour-9 block turning green based on all three parameters
      $this.addClass("past");
    } else if ($thisAttr > currentHour) {
      $this.addClass("future");
    }
  });
  // if()
  // else if div's id contains # = current hour, add class of present
  // else div add class of future

  // today.format("HH:mm:ss");
  // TODO: Add code to get any user input that was saved in localStorage and set

  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // consider a different approach to saving to LS
  // const getTasks = localStorage.getItem("stringTask");
  // let parsedTask = JSON.parse(getTasks);
  // console.log(parsedTask); // returns an object
  // $task.text("we");
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(today.format("dddd[,] MMMM D"));
});

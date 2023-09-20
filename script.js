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
  const $saveBtn = $(".saveBtn");
  $saveBtn.on("click", function (event) {
    event.stopPropagation();
    let $parentID = $(this).parent().attr("id");
    // returns the id of the parent (time of day div)
    let $task = $(this).prev(this);
    let $taskValue = $task.val();
    // console.log($taskValue);
    let storedTask = localStorage.setItem($parentID, $taskValue); //works above!
    $(function getStored($parentID) {
      let getStoredTask = localStorage.getItem($parentID);
      // $("textarea").text(getStoredTask);
    });

    // const
    // the browser to check to see if there is a key to match the textarea's parent's id (hour-#)
    // if key = parent id, then textarea.text(value)
    // if ()
    // how can I future proof this in case the position of textarea changes later?
  });

  // renders tasks to their respective textareas
  $("#hour-9 > textarea").text(localStorage.getItem("hour-9"));
  $("#hour-10 > textarea").text(localStorage.getItem("hour-10"));
  $("#hour-11 > textarea").text(localStorage.getItem("hour-11"));
  $("#hour-12 > textarea").text(localStorage.getItem("hour-12"));
  $("#hour-13 > textarea").text(localStorage.getItem("hour-13"));
  $("#hour-14 > textarea").text(localStorage.getItem("hour-14"));
  $("#hour-15 > textarea").text(localStorage.getItem("hour-15"));
  $("#hour-16 > textarea").text(localStorage.getItem("hour-16"));
  $("#hour-17 > textarea").text(localStorage.getItem("hour-17"));

  $(function timeHandler() {
    const today = dayjs();
    currentHour = today.format("H");
    const $timeBlock = $(".time-block");
    $timeBlock.each(function () {
      const $this = $(this);
      let $thisAttr = $this.attr("data-hour");
      // let $thisAttrValue = $this[(id*=11)];
      console.log($thisAttr);
      if ($thisAttr === currentHour) {
        $this.addClass("present");
      }
      // sketchy fix below for 9 being applied the color green
      else if ($thisAttr < currentHour || $thisAttr == "9") {
        $this.addClass("past");
      } else if ($thisAttr > currentHour) {
        $this.addClass("future");
      }
    });
    $("#currentDay").text(today.format("dddd[,] MMMM D"));
  });
});

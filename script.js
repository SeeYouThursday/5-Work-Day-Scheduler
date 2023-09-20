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
    $(function getStored() {
      let getStoredTask = localStorage.getItem("");
      $("textarea.").text(getStoredTask);
    });

    // const
    // the browser to check to see if there is a key to match the textarea's parent's id (hour-#)
    // if key = parent id, then textarea.text(value)
  // if ()
    // how can I future proof this in case the position of textarea changes later?
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
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

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});

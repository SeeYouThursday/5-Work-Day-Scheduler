$(function () {
  const $saveBtn = $(".saveBtn");
  $saveBtn.on("click", function (event) {
    event.stopPropagation();
    let $parentID = $(this).parent().attr("id");
    // returns the id of the parent (time of day div)
    let $task = $(this).prev(this);
    let $taskValue = $task.val();
    let storedTask = localStorage.setItem($parentID, $taskValue); //works above!
    $(function getStored($parentID) {
      let getStoredTask = localStorage.getItem($parentID);
    });
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

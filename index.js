function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // You can adjust the limit based on your specific layout
    const rightLimit = 400;

    if (left < rightLimit) {
        dodger.style.left = `${left + 1}px`;
    }
}

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";
dodger.style.left = "0px";

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
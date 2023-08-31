const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

const getRandomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let changeColorInterval;

startButton.addEventListener("click", () => {
  if (!changeColorInterval) {
    changeColorInterval = setInterval(() => {
      document.querySelector("body").style.backgroundColor = getRandomColor();
    }, 100);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(changeColorInterval);
  changeColorInterval = null;
});

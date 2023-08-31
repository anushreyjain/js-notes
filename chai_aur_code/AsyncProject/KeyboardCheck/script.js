const keyPressedBox = document.querySelector("#keyPressedBox");

document.querySelector("body").addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    keyPressedBox.innerHTML = "Space";
  } else {
    keyPressedBox.innerHTML = e.key;
  }
});

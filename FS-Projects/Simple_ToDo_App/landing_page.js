popupWindow = document.getElementById("add-task-popup");
popupWindowOpenButton = document.getElementById("popup-open-button");
popupWindowCloseButton = document.getElementById("popup-close-button");
body = document.body;

popupWindowOpenButton.addEventListener("click", () => {
  popupWindow.classList.add("popup-visible");
  body.classList.add("popup-visible");
  console.log("open");
})

popupWindowCloseButton.addEventListener("click", () => {
  popupWindow.classList.remove("popup-visible");
  body.classList.remove("popup-visible");
  console.log("close");
})
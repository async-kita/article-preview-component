const shareElement = document.querySelector("[data-js-card-share]");
const buttonElement = document.querySelector("[data-js-card-share-button]");

const onClickButton = () => {
  if (shareElement.classList.contains("is-active")) {
    shareElement.classList.remove("is-active");
    buttonElement.setAttribute("aria-expanded", "false");
  } else {
    shareElement.classList.add("is-active");
    buttonElement.setAttribute("aria-expanded", "true");
  }
};

buttonElement.addEventListener("click", onClickButton);

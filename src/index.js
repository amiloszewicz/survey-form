import style from "./main.css";

const submitFormButton = document.getElementById("submit");

const checkEmail = event => {
  event.stopImmediatePropagation();
  alert("aaa");
  const email = document.getElementById("email");
  const emailRegex = /.+\@.+\..+/;

  if (!emailRegex.test(email.value)) {
    console.log("wrong email");
    event.stopPropagation();
  } else {
    console.log("succes");
    return true;
  }
};

submitFormButton.addEventListener("click", checkEmail, false);

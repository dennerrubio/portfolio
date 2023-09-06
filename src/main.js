//BACK TO THE TOP
const mybutton = document.getElementById("btn-back-to-top");
const scrollFunction = () => {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

mybutton.addEventListener("click", backToTop);
window.addEventListener("scroll", scrollFunction);

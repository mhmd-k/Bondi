// navbar search button
document.querySelector("nav .form button").addEventListener("click", () => {
  document.querySelector("nav .form input").classList.remove("d-none");
  setTimeout(() => {
    document.querySelector("nav .form input").classList.remove("hidden");
  }, 10);
});
// portfolio more btn
const moreBtn = document.querySelector(".portfolio a");
let pics = document.querySelectorAll(".portfolio .row .col-sm-6.d-none");
moreBtn.addEventListener("click", (btn) => {
  btn.preventDefault();
  if (moreBtn.innerHTML === "More") {
    moreBtn.innerHTML = "Less";
    pics.forEach((e) => {
      e.classList.remove("d-none");
    });
  } else {
    moreBtn.innerHTML = "More";
    pics.forEach((e) => {
      e.classList.add("d-none");
    });
  }
});
// portfolio filter
const portfolioFilterBtns = document.querySelectorAll(".portfolio ul li");
let allPics = document.querySelectorAll(".portfolio .row .col-sm-6");
portfolioFilterBtns.forEach((portBtn) => {
  portBtn.addEventListener("click", () => {
    portfolioFilterBtns.forEach((e) => {
      e.classList.remove("active");
    });
    portBtn.classList.add("active");
    if (portBtn.getAttribute("data-portfolio") === "all") {
      allPics.forEach((pic) => {
        pic.classList.remove("d-none");
      });
      moreBtn.innerHTML = "less";
    } else {
      allPics.forEach((pic) => {
        if (
          pic.getAttribute("data-portfolio") ===
          portBtn.getAttribute("data-portfolio")
        ) {
          pic.classList.remove("d-none");
        } else {
          pic.classList.add("d-none");
        }
      });
    }
  });
});

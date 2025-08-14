"use script";

// component elements
const ratingsComponentEl = document.querySelector(".ratings-component");

const thankYouComponentEl = document.querySelector(".thank-you-component");

const ratingsSelectionEl = document.querySelector(".ratings--selection");

const ratingsEl = document.querySelector(".ratings");

const stateEl = document.querySelector(".state");

// text elements
const ratingResultEl = document.querySelector(".rating--result");

// button elements
const ratingsSubmitBtnEl = document.querySelector(".ratings--submit");
const ratingsBtnEl = document.querySelectorAll(".ratings--button");

let rating;

ratingsSelectionEl.addEventListener("click", function (e) {
  // Specifies the rating buttons
  const ratingsBtn = e.target.closest(".ratings--button");

  // if rating buttons were not clicked
  // return
  if (!ratingsBtn) return;

  // function which activates the button element's UI
  buttonActive(ratingsBtn);

  // Gets the user's rating value
  rating = ratingsBtn.textContent;
});

ratingsSubmitBtnEl.addEventListener("click", function () {
  // Checks if rating has value
  if (rating) {
    // hide ratings component
    ratingsEl.classList.add("hidden");

    // Render thank you component
    stateEl.classList.add("active");

    // render rating result
    ratingResultEl.textContent = rating;
  }
});

function buttonActive(btnEl) {
  // Check for all the rating buttons
  ratingsBtnEl.forEach((el) => {
    // If each one of the buttons are activated
    if (el.classList.contains("activate--button"))
      // Disables current rating button's active UI
      el.classList.remove("activate--button");
  });
  // Activate clicked rating button
  btnEl.classList.add("activate--button");
}

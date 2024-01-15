const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const dayLabel = document.querySelector("#dayLabel");
const monthLabel = document.querySelector("#monthLabel");
const yearLabel = document.querySelector("#yearLabel");

const resultYear = document.querySelector("#results-year");
const resultMonth = document.querySelector("#results-month");
const resultDay = document.querySelector("#result-day");

const btn = document.querySelector("#btn");

const date = new Date();

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
function validYearInput() {
  if (yearInput.value > date.getFullYear()) {
    yearInput.classList.add("message-error");
    yearLabel.classList.add("message-error");
    yearLabel.classList.add("message-error-year");
  } else if(yearInput.value !== ""){
    resultYear.innerHTML = date.getFullYear() - yearInput.value;
  }
}

function validMonthInput() {
  if (monthInput.value > 12) {
    monthInput.classList.add("message-error");
    monthLabel.classList.add("message-error");
    monthLabel.classList.add("message-error-month");
  }else if(monthInput.value !== ""){
    resultMonth.innerHTML = 12 - monthInput.value;
  }
}

function validDayInput() {
  if (dayInput.value > daysInMonth(monthInput.value, yearInput.value)) {
    dayInput.classList.add("message-error");
    dayLabel.classList.add("message-error");
    dayLabel.classList.add("message-error-day");
  }else if(dayInput.value !== ""){
    resultDay.innerHTML =
      daysInMonth(monthInput.value, yearInput.value) +
      date.getDate() -dayInput.value;
  }
}

function inputValidation(input, label) {
  validYearInput();
  validMonthInput();
  validDayInput();
  if (input.value === "") {
    input.classList.add("message-error");
    label.classList.add("message-error");
  }
}

function formatLimit(input) {
  input.addEventListener("input", (e) => {
    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength);
    }
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  inputValidation(dayInput, dayLabel);
  inputValidation(monthInput, monthLabel);
  inputValidation(yearInput, yearLabel);
    
  validDayInput();
  validMonthInput();
  validYearInput();

    
  // if (
  //   dayInput.value !== "" &&
  //   monthInput.value !== "" &&
  //   yearInput.value !== ""
  // ) {
  //   resultYear.innerHTML = date.getFullYear() - yearInput.value;
  //   resultMonth.innerHTML = 12 - monthInput.value;
  //   resultDay.innerHTML =
  //     daysInMonth(monthInput.value, yearInput.value) +
  //     date.getDate() -
  //     dayInput.value;
  // } 
});

formatLimit(dayInput);
formatLimit(monthInput);
formatLimit(yearInput);

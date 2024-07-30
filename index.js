const input_year = document.getElementById('year');
const input_month = document.getElementById('month');
const input_day = document.getElementById('day');

const output_year = document.getElementById("years");
const output_months = document.getElementById("months");
const output_days = document.getElementById("days");

const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

const submitBtn = document.querySelector(".submit-btn");



function validateInputs() {
    let isValid = true;


input_day.addEventListener('input', e => {
    if (input_day.value > 31) {
        error_day.textContent = "Must be a valid day";
        isValid = false;    
    } else {
        error_day.textContent = '';
    }
    if (+input_day.value === 0) {
        error_day.textContent = "This field is required";
        isValid = false;     
    }
});


input_month.addEventListener('input', e => {
    if (input_month.value > 12) {
        error_month.textContent = "Must be a valid month";
        isValid = false;
    } else {
        error_month.textContent = '';
    }
    if (+input_month.value === 0) {
        error_month.textContent = "This field is required";
        isValid = false;

    }
});


const currentYear = new Date().getFullYear();

input_year.addEventListener('input', e => {
    if (input_year.value > currentYear) {
        error_year.textContent = "Must be a valid year";
        isValid = false;
        
    } else {
        error_year.textContent = '';
    }
    if (+input_year.value === 0) {
        error_year.textContent = "This field is required";
        isValid = false;
    }
});

return isValid;

}

function calculateAge() {
    if (!validateInputs()) {
        return;
    }

    const day = input_day.value;
    const month = input_month.value;
    const year = input_year.value;

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
       
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths +=12;
    }
    output_year.innerText = ageYears;
    output_months.innerText = ageMonths;
    output_days.innerText = ageDays;
}

submitBtn.addEventListener('click', calculateAge);
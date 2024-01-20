let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let period = document.querySelector("#period");
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  calender = document.querySelector(".calender"),
  setYear = document.querySelector(".control .year"),
  setMonth = document.querySelector(".control .month"),
  nextMonth = document.querySelector("#right-arrow"),
  previousMonth = document.querySelector("#left-arrow"),
  weekday = document.createElement("div");
weekday.classList.add("weekday");
calender.appendChild(weekday);
const dates = document.createElement("div");
dates.classList.add("date");
calender.appendChild(dates);
const currDate = new Date();
let currYear = currDate.getFullYear();
let currMonth = currDate.getMonth();
const monthDate = currDate.getDate();
const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
const setMonthYear = () => {
  setMonth.innerText = months[currMonth];
  setYear.innerText = currYear;
};
setMonthYear();

week.forEach((day) => {
  const days = document.createElement("div");
  days.innerText = day;
  weekday.appendChild(days);
});

const clearCalendar = () => {
  const dateItems = document.querySelectorAll(".date-item");

  dateItems.forEach((item) => {
    item.remove();
  });
};
const showCalendar = (year, month, date) => {
  clearCalendar();
  const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateofMonth = new Date(year, month + 1, 0).getDate();

  let count = 1;
  for (let day = 1; day <= 42; day++) {
    const date = document.createElement("div");
    date.classList.add("date-item");
    dates.appendChild(date);
    if (day <= firstDayofMonth || count > lastDateofMonth) {
      continue;
    }
    if (
      count === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    )
      date.classList.add("todaydate");
    date.innerText = count;
    count++;
  }
};
const showTime = () => {
  let count = 1;
  let time = new Date();
  let hours = time.getHours();
  let minute = time.getMinutes().toString();
  let second = time.getSeconds().toString();
  hr.innerHTML = (((hours + 11) % 12) + 1).toString().padStart(2, "0");
  min.innerHTML = minute.padStart(2, "0");
  sec.innerHTML = second.padStart(2, "0");
  period.innerHTML = hours >= 12 ? "PM" : "AM";
};

const setInitial = () => {
  showCalendar(currYear, currMonth, currDate);
};
setInitial();
setInterval(showTime, 1000);

// const showdate = document.querySelectorAll(".date div");
// showdate[currDate.getDate() - 1].classList.add("todaydate");

previousMonth.addEventListener("click", function () {
  if (currMonth > 0 && currMonth <= 11) {
    currMonth--;
  } else {
    if (currMonth == 0) {
      currYear--;
    }
    currMonth = 11;
  }
  setMonthYear();

  showCalendar(currYear, currMonth, currDate);
});

nextMonth.addEventListener("click", function () {
  // currMonth < 11 ? currMonth++ : (currMonth = 0 ;currYear++);
  if (currMonth < 11) {
    currMonth++;
  } else {
    currMonth = 0;
    currYear++;
  }
  setMonthYear();

  showCalendar(currYear, currMonth, currDate);
});

/** 11%7 == 4 */
// const rem = monthDate % 7;
// const x = week[rem - 1];

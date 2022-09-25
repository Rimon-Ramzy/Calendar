const currrentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons i");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// GET NEW DATE, CURRENT YEAR AND MONTH
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const renderCalender = () => {
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // FIRST DAY OF MONTH
  let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // LAST DATE OF MONTH
  let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate(); // LAST DATE OF PREVIOUS MONTH
  let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(); // LAST DAY OF MONTH
  let liTag = ''
  for (let i = firstDayOfMonth; i > 0; i--) { // CREATING LI OF PREVIOUS MONTH LAST DAYS
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`
  }
  for (let i = 1; i <= lastDateOfMonth; i++) { // CREATING LI OF ALL DAYS OF CURRENT MONTH
    let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${isToday}">${i}</li>`
  }
  for (let i = lastDayOfMonth; i < 6; i++) { // CREATING LI OF NEXT MONTH FIRST DAYS
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
  }
  daysTag.innerHTML = liTag
  currrentDate.innerHTML = `${months[currentMonth]} ${currentYear}`
}
renderCalender();


prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth)
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    }
    renderCalender()
  })
})
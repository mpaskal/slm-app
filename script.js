// show/hide sidebar
const updateNav = document.querySelector("#update-btn");
const sidebar = document.querySelector(".sidebar");
const updateTitle = document.querySelector(".close-sidebar-btn");

updateNav.addEventListener("click", (event) => {
  event.preventDefault();
  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "block";
    updateNav.style.display = "none";
  }
});

updateTitle.addEventListener("click", (event) => {
  event.preventDefault();
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
    updateNav.style.display = "inline";
  }
});

// copyright
function todayDate() {
  let date = new Date().getFullYear();
  return date;
}

function renderBoard() {
  let dateCopyright = todayDate();
  document.querySelector(
    ".copyright"
  ).innerHTML = `Copyright &copy; ${dateCopyright} Community App Project Team`;
}

// executed with loading
(function () {
  renderBoard();
})();

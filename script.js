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

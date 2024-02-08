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

//When student login clicked
document.addEventListener("DOMContentLoaded", function() {
  var studentLoginButton = document.getElementById("loginButton");
  studentLoginButton.addEventListener("click", function() {
    studentLogin();
  });
function studentLogin() {
    alert("Student login clicked!");
  }
});

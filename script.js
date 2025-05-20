
document.getElementById("reservaForm").onsubmit = function () {
  const msg = document.getElementById("successMsg");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 5000);
};

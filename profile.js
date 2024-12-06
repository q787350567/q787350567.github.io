function goBack() {
  window.history.back();
}

function logOut() {
  localStorage.removeItem("token");
  location.href = "/index.html";
}

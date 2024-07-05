let account = [];
const url = "http://localhost:5000/account";
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}
async function loadAccount() {
  account = await fetchData(url);
}
loadAccount();

function filterAccount() {
  const phone = document.getElementById("phone").value;
  const passWord = document.getElementById("passWord").value;
  let filterAray = account.filter((acc) => {
    return phone.includes(acc.Phone) && passWord.includes(acc.Password);
  });
  if (filterAray.length > 0) {
    let user = filterAray[0];
    sessionStorage.setItem("username", user.Name);
    window.location.href = "../acountOfBuycarmudi.html";
  }
}

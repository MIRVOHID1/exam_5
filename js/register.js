const btn = document.querySelector('.navbar__add__btn');
const menu = document.querySelector('.navbar__menu');
const remove__btn = document.querySelector('.navbar__remove__btn');
btn.addEventListener('click', () => {
  menu.classList.add('show');
  remove__btn.style.display = 'block'
  btn.style.display = 'none'
});
remove__btn.addEventListener('click', () => {
  menu.classList.remove('show');
  remove__btn.style.display = 'none'
  btn.style.display = 'block'
})

const form = document.querySelector(".form");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const userName = document.querySelector(".username");
const password = document.querySelector(".password");
const repeatPassword = document.querySelector(".repeatedPassword");
const checkInp = document.querySelector(".checkbox");
const list = document.querySelector("#tasklist");
const storedNames = JSON.parse(localStorage.getItem("tasks")) || [];
const names = storedNames;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newFirstName = firstName.value.trim();
  const newlastName = lastName.value.trim();
  const newUserName = userName.value.trim();
  const newPassword = password.value.trim();
  

  if (newFirstName !== "" && newlastName !== "" && newUserName !== "") {
    const newName = {
      objName: newFirstName,
      lastName: newlastName,
      userName: newUserName,
      password: newPassword,
    };

    names.push(newName);
    localStorage.setItem("tasks", JSON.stringify(names));

    form.reset();
  }
  

  form.reset();
  renderList();
});

function renderList() {
  list.innerHTML = "";

  names.forEach((element, index) => {
    const nameElement = document.createElement("li");
    const lastNameElement = document.createElement("li");
    const userNameElement = document.createElement("li");
    const loginElement = document.createElement("li");
    const passwordElement = document.createElement("li");
    const removeBtn = document.createElement("button");

    removeBtn.classList.add("delBtn");
    removeBtn.textContent = "Remove";

    nameElement.textContent = `name: ${element.objName}`;
    nameElement.classList.add("listItem");

    lastNameElement.textContent = `last name: ${element.lastName}`;
    lastNameElement.classList.add("listItem");

    userNameElement.textContent = `userName: ${element.userName}`;
    userNameElement.classList.add("listItem");

    passwordElement.textContent = `Parol: ${element.password}`;
    passwordElement.classList.add("listItem");

    removeBtn.addEventListener("click", () => {
      names.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(names));
      renderList();
    });

    list.appendChild(nameElement);
    list.appendChild(lastNameElement);
    list.appendChild(userNameElement);
    list.appendChild(passwordElement);
    list.appendChild(removeBtn);
  });
}

renderList();


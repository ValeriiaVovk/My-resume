/*Анімація на фото при кліку на фото*/
const mainPhoto = document.querySelector(".main-photo");

function animateImage() {
  mainPhoto.classList.toggle("animate");
}

mainPhoto.addEventListener("click", animateImage);
/*Навігація по документу */

const blockA = document.querySelector(".blockA");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    blockA.scrollIntoView({ behavior: "smooth" });
  }
});

const blockB = document.querySelector(".blockB");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyB") {
    blockB.scrollIntoView({ behavior: "smooth" });
  }
});

const blockC = document.querySelector(".blockC");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyC") {
    blockC.scrollIntoView({ behavior: "smooth" });
  }
});

const blockD = document.querySelector(".blockD");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyD") {
    blockD.scrollIntoView({ behavior: "smooth" });
  }
});

const blockE = document.querySelector(".blockE");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyE") {
    blockE.scrollIntoView({ behavior: "smooth" });
  }
});

const blockF = document.querySelector(".blockF");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyF") {
    blockF.scrollIntoView({ behavior: "smooth" });
  }
});

const blockG = document.querySelector(".blockG");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyG") {
    blockG.scrollIntoView({ behavior: "smooth" });
  }
});

const repositories = document.querySelector(".repositories");

window.addEventListener("load", function () {
  fetch("https://api.github.com/users/ValeriiaVovk/repos")
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      data.forEach(function (repo) {
        const items = document.createElement("li");
        const name = document.createElement("a");
        const description = document.createElement("p");

        name.textContent = repo.full_name;
        name.setAttribute("href", repo.html_url);
        name.setAttribute("target", "_blank");

        items.appendChild(name);
        repositories.appendChild(items);

        if (repo.description) {
          description.textContent = repo.description;
          items.appendChild(description);
        }
      });
    });
});
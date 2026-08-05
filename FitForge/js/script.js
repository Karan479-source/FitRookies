// YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});


// SEARCH

const search = document.getElementById("search");
const items = document.querySelectorAll(".searchable");
const searchMessage = document.getElementById("searchMessage");

search.addEventListener("input", () => {

  const query = search.value.toLowerCase().trim();

  let results = 0;

  items.forEach(item => {

    const text =
      (item.dataset.search || "") +
      " " +
      item.textContent.toLowerCase();

    if (text.includes(query)) {

      item.style.display = "";

      results++;

    } else {

      item.style.display = "none";

    }

  });

  if (query === "") {

    searchMessage.textContent =
      "Browse our fitness guides below.";

  } else {

    searchMessage.textContent =
      results + " result(s) found.";

  }

});


// MODAL

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const closeModal = document.getElementById("closeModal");
const okBtn = document.getElementById("okBtn");


document.querySelectorAll(".readBtn, .exercise").forEach(button => {

  button.addEventListener("click", () => {

    const title = button.dataset.title;

    modalTitle.textContent = title;

    modalText.textContent =
      "This is a starter guide for " +
      title +
      ". Replace this preview with your own original, detailed fitness article before publishing.";

    modal.classList.add("show");

  });

});


function closePopup() {

  modal.classList.remove("show");

}


closeModal.addEventListener("click", closePopup);

okBtn.addEventListener("click", closePopup);


modal.addEventListener("click", event => {

  if (event.target === modal) {

    closePopup();

  }

});

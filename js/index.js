var elOpenModalBtn = document.querySelector(".site-article-box");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".js-exit-icon");

elOpenModalBtn.addEventListener("click", function() {
    elModal.classList.add("modal-open");
});

elCloseModalBtn.addEventListener("click", function() {
    elModal.classList.remove("modal-open");
});
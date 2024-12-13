document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion")[0].getElementsByTagName("h3");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.nextElementSibling.classList.toggle("active");
            if (this.nextElementSibling.style.display === "block") {
                this.nextElementSibling.style.display = "none";
            } else {
                this.nextElementSibling.style.display = "block";
            }
        });
    }
});

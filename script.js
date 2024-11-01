function setupResponsiveNav() {
    let botaoNav = document.querySelector(".nav-responsiva");
    let botaoNavAberta = document.querySelector(".nav-responsiva-aberta");
    let nav = document.querySelector("nav ul");

    if (botaoNav && botaoNavAberta && nav) {
        botaoNav.addEventListener("click", function () {

            botaoNavAberta.style.display = "block";
            nav.style.display = "flex";
            //Faz a nav aparecer quando clicado
        });

        botaoNavAberta.addEventListener("click", function () {

            botaoNavAberta.style.display = "none";
            nav.style.display = "none";

        });
    }
};

function checkMediaQuery() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        setupResponsiveNav();
    }
}

checkMediaQuery();

window.addEventListener('resize', checkMediaQuery);

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        //Obtém o id da parte que corresponde ao link clicado
        const sectionId = this.getAttribute("data-section");
        const section = document.getElementById(sectionId);

        section.scrollIntoView({ behavior: "smooth" });


        if (window.innerWidth <= 768) {
            let botaoNavAberta = document.querySelector(".nav-responsiva-aberta");
            let nav = document.querySelector("nav ul");

            if (botaoNavAberta && nav) {
                botaoNavAberta.style.display = "none";
                nav.style.display = "none";
            }

        };

    });

});
document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    elementos.forEach(el => observer.observe(el));

    const texto = "Desenvolvedor Júnior";
    const elemento = document.getElementById("digitando");

    if (elemento) {
        let i = 0;

        function digitar() {
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
                setTimeout(digitar, 80);
            }
        }

        digitar();
    }

    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".opcoes a");

    window.addEventListener("scroll", () => {
        let atual = "";

        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            const height = sec.clientHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {
                atual = sec.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("ativo");

            if (link.getAttribute("href") === "#" + atual) {
                link.classList.add("ativo");
            }
        });
    });

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 50);
        }
    });

});

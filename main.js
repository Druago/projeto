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
const texto = "Desenvolvedor Web";
const texto2 = "Transformo ideias em sites modernos, rápidos e responsivos.";

const elemento = document.getElementById("digitando");
const elemento2 = document.getElementById("digitando2");

if (elemento && elemento2) {

    let i = 0;
    let j = 0;

    function digitarTitulo() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitarTitulo, 80);
        } else {
            setTimeout(digitarDescricao, 300); // pequena pausa
        }
    }

    function digitarDescricao() {

    elemento2.style.opacity = "1";

    if (j < texto2.length) {
        elemento2.innerHTML += texto2.charAt(j);
        j++;
        setTimeout(digitarDescricao, 40);
        }
    }

    digitarTitulo();
    }
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

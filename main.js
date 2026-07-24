document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Scroll reveal ---------- */
    const elementos = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach(el => observer.observe(el));

    /* ---------- Efeito de digitação ---------- */
    const texto = "Desenvolvedor Web";
    const texto2 = "Transformo ideias em sites modernos, rápidos e responsivos.";

    const elemento = document.getElementById("digitando");
    const elemento2 = document.getElementById("digitando2");

    function iniciarDigitacao() {
        if (elemento && elemento2) {
            let i = 0;
            let j = 0;

            function digitarTitulo() {
                if (i < texto.length) {
                    elemento.innerHTML += texto.charAt(i);
                    i++;
                    setTimeout(digitarTitulo, 80);
                } else {
                    setTimeout(digitarDescricao, 300);
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

    // Espera as fontes (Space Grotesk, Inter, JetBrains Mono) carregarem antes
    // de começar a digitar. Assim a troca de fonte (FOUT) não acontece no meio
    // da animação e não desloca o texto já digitado. Com timeout de segurança
    // caso o navegador não suporte a Font Loading API ou a fonte demore demais.
    if (document.fonts && document.fonts.ready) {
        let iniciado = false;
        const iniciarUmaVez = () => {
            if (iniciado) return;
            iniciado = true;
            iniciarDigitacao();
        };
        document.fonts.ready.then(iniciarUmaVez);
        setTimeout(iniciarUmaVez, 800);
    } else {
        iniciarDigitacao();
    }

    /* ---------- Menu ativo conforme scroll ---------- */
    const sections = document.querySelectorAll("section[id]");
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

    /* ---------- Header com fundo ao rolar ---------- */
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 50);
        }
    });

    /* ---------- Menu mobile ---------- */
    const menuToggle = document.querySelector(".menu-toggle");
    const opcoes = document.querySelector(".opcoes");

    if (menuToggle && opcoes) {
        menuToggle.addEventListener("click", () => {
            opcoes.classList.toggle("aberto");
        });

        links.forEach(link => {
            link.addEventListener("click", () => opcoes.classList.remove("aberto"));
        });
    }

});

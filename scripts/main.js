/* ---------------------- scroll reavel ----------------------- */
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.conteiner-inicio, .cabeçalho, .titulo', { origin: 'top' });
ScrollReveal().reveal('.imagem-inicio, .projetos-box, .contatos, .tecnologias', { origin: 'bottom' });
ScrollReveal().reveal('.conteiner-inicio h1, .sobremim-conteudo h3, .sobremim-conteudo p', { origin: 'left' });
ScrollReveal().reveal('.conteiner-inicio p', { origin: 'right' });

/* ------------------- typed scripts -------------------- */

const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Front-End'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});

/* -------------------- menu mobile ---------------------- */

const burger = document.querySelector('.icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}

/* -------------------  arrow up ------------------------- */

const arrowUp = document.querySelector('.arrow-up');

window.addEventListener("scroll", function () {
    if (window.scrollY >= 500) {
        arrowUp.classList.add('show');
        arrowUp.classList.remove('hide');
    } else {
        arrowUp.classList.remove('show');
        arrowUp.classList.add('hide');
    }
});

arrowUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
    });
});

/* ------------------------ scroll links animação --------------------- */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        };
    });

/* ------------- scroll navbar borda bottom---------------- */
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

/* ---------------- remove menu quando clickar no link ------------------- */

    burger.classList.remove('_active');
    menu.classList.remove('_active');

};

/* ---------------------- scripts do formulario --------------------------- */

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = formulario.querySelector("input[name='nome']").value;
    const email = formulario.querySelector("input[name='email']").value;
    const mensagem = formulario.querySelector("textarea[name='mensagem']").value;

    const data = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    // Substitua a URL pelo seu servidor de destino
    fetch("URL_DO_SEU_SERVIDOR", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            // Aqui você pode tratar a resposta do servidor, por exemplo, mostrar uma mensagem de sucesso
            console.log(data);
            window.alert("Mensagem enviada com sucesso!");
            formulario.reset(); // Limpa o formulário
        })
        .catch(error => {
            // Em caso de erro, você pode tratar aqui
            console.error("Erro ao enviar mensagem: " + error);
        });
});


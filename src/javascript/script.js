$(document).ready(function () {
    $('#menu').on('click', function () {
        $('#mobile_menu').toggleClass('active');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#home', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

});

function changeMenu() {
    const menu = document.getElementById('menu')
    menu.classList.toggle('active')
}

//regras de exibição de campos
function exibirCampo(show) {
    const message = document.getElementById("text-message");
    const imagem = document.getElementById("decor-file");
    const massa = document.getElementById("massa");
    const cobertura = document.getElementById("cobertura");
    const confeitos = document.getElementById("confeitos");
    const recheio = document.getElementById("recheio");
    const qtdCaixas = document.getElementById("qtd-caixas");
    const qtdItens = document.getElementById("qtd-itens");

    if (show) {
        message.classList.remove("esconder");
        imagem.classList.remove("esconder");
        qtdItens.classList.remove("esconder");
        qtdCaixas.classList.add("esconder");
        massa.classList.add("esconder");
        cobertura.classList.add("esconder");
        confeitos.classList.add("esconder");
        recheio.classList.add("esconder");
    } else {
        message.classList.add("esconder");
        imagem.classList.add("esconder");
        qtdItens.classList.add("esconder");
        qtdCaixas.classList.remove("esconder");
        massa.classList.remove("esconder");
        cobertura.classList.remove("esconder");
        confeitos.classList.remove("esconder");
        recheio.classList.remove("esconder");
    }
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(
    ".about-row:nth-child(3) .about-image img, .about-row:nth-child(5) .about-image img",
    {
        ...scrollRevealOption,
        origin: "left",
    }
);

ScrollReveal().reveal(
    ".about-row:nth-child(4) .about-image img, .about-row:nth-child(6) .about-image img",
    {
        ...scrollRevealOption,
        origin: "right",
    }
);

ScrollReveal().reveal(".about-content span", {
    ...scrollRevealOption,
    delay: 200,
});

ScrollReveal().reveal(".about-content h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about-content p", {
    ...scrollRevealOption,
    delay: 700,
});

ScrollReveal().reveal(".product-card", {
    ...scrollRevealOption,
    interval: 500,
});


const scrollToHomeButton = document.getElementsByClassName('scroll-home');

Array.from(scrollToHomeButton).forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#home').scrollIntoView({
            behavior: 'smooth' 
        });
    });
});

//Exibir na tela o nome do arquivo selecionado
var $input = document.getElementById('input-file'),
    $fileName = document.getElementById('file-name');

if ($input && $fileName) {
    $input.addEventListener('change', function () {
        if (this.files && this.files[0]) {
            $fileName.textContent = this.files[0].name;
        }
    });
}
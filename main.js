VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400
});

const cards = document.querySelectorAll('.card');
const title = document.getElementById('title');


const colors = [
    'rgb(43, 8, 139)',   // Segunda-feira
    'rgb(173, 27, 117)', // Terça-feira
    'rgb(42, 233, 21)',  // Quarta-feira
    'rgb(17, 153, 212)', // Quinta-feira
    'rgb(225, 85, 20)',  // Sexta-feira
    'rgb(230, 17, 34)',  // Sábado
    'rgb(223, 230, 17)'  // Domingo
];


cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        title.style.color = colors[index]; 
    });
    card.addEventListener('mouseleave', () => {
        title.style.color = '';
    });
});


const today = new Date().getDay(); 
cards.forEach(card => {
    const day = parseInt(card.getAttribute('data-day'), 10);
    if (day === today) {
        card.style.filter = 'grayscale(0%)'; 
    }
});

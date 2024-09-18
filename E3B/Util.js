

const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      image: "./img/muzzarella.png",
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      image: "./img/cebolla.png",
    },
  
    {
      id: 3,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
      image: "./img/4quesos.png",
    },
  
    {
      id: 4,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      image: "./img/especial.png",
    },
  
    {
      id: 5,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
      image: "./img/anana.png",
    },
  ];

// Función para mostrar un mensaje de error
function showError(message) {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `<p class="error-message">${message}</p>`;
}

// Función para renderizar la pizza
function renderPizza(pizza) {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `
      <div class="pizza-card">
          <img src="${pizza.image}" alt="${pizza.nombre}">
          <h2>${pizza.nombre}</h2>
          <p>Precio: $${pizza.precio}</p>
      </div>
  `;
}

// Manejar el evento de clic en el botón de búsqueda
document.getElementById('searchButton').addEventListener('click', function() {
  const number = document.getElementById('numberInput').value;
  const resultContainer = document.getElementById('result-container');

  // Limpiar el contenedor de resultados
  resultContainer.innerHTML = '';

  if (number === '') {
      showError('Por favor, ingresa un número.');
      return;
  }

  // Buscar la pizza con el ID ingresado
  const pizza = pizzas.find(pizza => pizza.id === parseInt(number));

  if (pizza) {
      // Mostrar la pizza y guardar en localStorage
      renderPizza(pizza);
      localStorage.setItem('lastPizza', JSON.stringify(pizza));
  } else {
      showError('No se encontró una pizza con ese ID.');
  }
});

// Recuperar y mostrar la última pizza al cargar la página
window.addEventListener('load', function() {
  const lastPizza = localStorage.getItem('lastPizza');
  if (lastPizza) {
      renderPizza(JSON.parse(lastPizza));
  }
});
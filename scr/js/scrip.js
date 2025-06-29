// Primero definimos las variables
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

// Evento de clic en el botón de menú
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    // Eliminamos las clases "active" de los otros elementos si están definidos
    if (searchForm) searchForm.classList.remove('active');
    if (cartItem) cartItem.classList.remove('active');
};

// Evento de clic en el botón de búsqueda
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    // Eliminamos las clases "active" de los otros elementos
    if (navbar) navbar.classList.remove('active');
    if (cartItem) cartItem.classList.remove('active');
};

// Evento de scroll en la ventana
window.onscroll = () => {
    // Eliminamos todas las clases "active" al hacer scroll
    if (navbar) navbar.classList.remove('active');
    if (searchForm) searchForm.classList.remove('active');
};
//registro de citas
// Función para agendar citas
function agendarCita() {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre && fecha && hora) {
        mensaje.innerHTML = `¡Cita agendada para ${nombre} el ${fecha} a las ${hora}!`;
        // mensaje.innerHTML ='!Cita agendada exitosamente';
        mensaje.style.color = "red";
        document.getElementById("citaForm").reset();
    } else {
        mensaje.innerHTML = "Por favor, completa todos los campos.";
        mensaje.style.color = "red";
    }
}
//fin

// INICIO REGISTRO
//Función que maneja el registro de usuario
function registrarUsuario() {
    // Obtiene los valores de los campos de entrada del formulario
    const nombreRegistro = document.getElementById('nombreRegistro').value; // Valor del nombre de usuario
    const email = document.getElementById('email').value; // Valor del correo
    const password = document.getElementById('password').value; // Valor de la contraseña
    // Elemento donde se mostrará el mensaje de confirmación o error
    const mensajeRegistro = document.getElementById('mensajeRegistro');
    // Comprueba si todos los campos tienen valores
    if (nombreRegistro && email && password) {
        // Si los campos están completos, muestra un mensaje de éxito
        mensajeRegistro.innerHTML = `¡Registro exitoso, ${nombreRegistro}!`;
        mensajeRegistro.innerHTML = `¡Registro exitoso, ${nombreRegistro}!`;
        mensajeRegistro.style.color = "red"; // Cambia el color del mensaje a rojo
        document.getElementById("registroForm").reset(); // Limpia el formulario después del registro
    } else {
        // Si falta algún campo, muestra un mensaje de error
        mensajeRegistro.innerHTML = "Por favor, completa todos los campos.";
        mensajeRegistro.style.color = "red"; // Cambia el color del mensaje a rojo
    }
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

//FIN REGISTRO

// Elementos del chat
const chatbox = document.getElementById("chatbox");
const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const openChatButton = document.getElementById("open-chat-logo");  // Cambiado a abrir con el logo de WhatsApp
const closeChatButton = document.getElementById("close-chat");

let isChatboxOpen = false;  // Se inicia con el chat cerrado

// Función para alternar la visibilidad del chat
function toggleChatbox() {
    chatContainer.classList.toggle("hidden");
    isChatboxOpen = !isChatboxOpen; // Cambiar estado del chat
}

// Abrir el chat al hacer clic en el logo de WhatsApp
openChatButton.addEventListener("click", toggleChatbox);

// Cerrar el chat
closeChatButton.addEventListener("click", toggleChatbox);

// Enviar el mensaje del usuario
sendButton.addEventListener("click", function () {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        addUserMessage(userMessage);
        respondToUser(userMessage);
        userInput.value = "";
    }
});

// Detectar la tecla "Enter" para enviar el mensaje
userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userMessage = userInput.value;
        addUserMessage(userMessage);
        respondToUser(userMessage);
        userInput.value = "";
    }
});

// Añadir el mensaje del usuario
function addUserMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2", "text-right");
    messageElement.innerHTML = `<p class="bg-red-500 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Añadir el mensaje del bot
function addBotMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2");
    messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Responder al usuario
function respondToUser(userMessage) {
    // Lógica del chatbot (puedes personalizar la respuesta aquí)
    setTimeout(() => {
        addBotMessage("Gracias por tu mensaje. ¿Te gustaría saber más sobre nuestros servicios de corte o productos?");
    }, 500);
}

// Al cargar la página, aseguramos que el chat esté vacío
document.addEventListener("DOMContentLoaded", function () {
    // Aseguramos que el chat comienza vacío y sin mensajes predeterminados
    chatbox.innerHTML = "";
});

//Inicio Servicios:

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  const descriptions = {
  "Cejas": "Nuestro servicio de perfilado de cejas está diseñado para realzar tu mirada y mantener una apariencia limpia y cuidada. Utilizamos técnicas precisas que respetan la forma natural de tu rostro, asegurando un acabado prolijo y armonioso.",
  
  "Barba": "Ofrecemos un corte y delineado de barba meticuloso, adaptado a tu estilo personal. Ya sea que busques un look elegante, moderno o tradicional, nuestro equipo se encarga de definir, emparejar y perfilar tu barba con precisión profesional.",
  
  "Corte": "Realizamos cortes de cabello clásicos y modernos, siempre considerando tus rasgos, preferencias y estilo de vida. Nuestro objetivo es que salgas con un look renovado, prolijo y completamente personalizado.",
  
  "Tintura": "Nuestro servicio de tintura ofrece opciones de coloración para cabello y barba, ideal para quienes desean renovar su imagen o cubrir canas. Utilizamos productos de alta calidad que cuidan tu cabello y ofrecen resultados duraderos y vibrantes.",
  
  "Limpieza": "La limpieza facial profunda está pensada para eliminar impurezas, puntos negros y exceso de grasa, dejando tu piel más limpia, fresca y revitalizada. Es el complemento ideal para cuidar tu rostro y prevenir imperfecciones."
};

  const images = document.querySelectorAll(".image-container img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.textContent = descriptions[img.alt] || "Servicio";
    });
  });

  document.querySelector(".close").onclick = function () {
    modal.style.display = "none";
  };

//Fin Servicios


// Función para agendar cita
// Generar el calendario dinámico
function generarCalendario(mes, anio) {
    const calendario = document.getElementById("calendario");
    calendario.innerHTML = `
        <div class="text-center text-blue-300">L</div>
        <div class="text-center text-blue-300">M</div>
        <div class="text-center text-blue-300">X</div>
        <div class="text-center text-blue-300">J</div>
        <div class="text-center text-blue-300">V</div>
        <div class="text-center text-blue-300">S</div>
        <div class="text-center text-blue-300">D</div>
    `;

    const primerDia = new Date(anio, mes, 1).getDay(); // Día del 1ro
    const diasEnMes = new Date(anio, mes + 1, 0).getDate(); // Total días del mes
    const offset = primerDia === 0 ? 6 : primerDia - 1; // Ajuste lunes-inicio

    // Espacios vacíos antes del primer día
    for (let i = 0; i < offset; i++) {
        calendario.innerHTML += `<div></div>`;
    }

    // Generar días del mes
    for (let dia = 1; dia <= diasEnMes; dia++) {
        calendario.innerHTML += `
            <div class="relative cursor-pointer hover:scale-105 bg-gray-800 text-white rounded-md p-4 box" data-day="${dia}">
                <div class="absolute inset-0 bg-gradient"></div>
                ${dia}
            </div>
        `;
    }

    // Asignar eventos a los días
    asignarEventosDias();
}

// Asignar eventos a los días
function asignarEventosDias() {
    document.querySelectorAll('.box').forEach((day) => {
        day.addEventListener('click', function () {
            // Selección de día en el calendario
            document.querySelectorAll('.box').forEach((day) => {
                day.addEventListener('click', function () {
                    // Quitar selección previa
                    document.querySelectorAll('.box').forEach((d) => d.classList.remove('bg-blue-500'));
                    // Resaltar día actual
                    this.classList.add('bg-blue-500');

                    const selectedDay = parseInt(this.getAttribute('data-day'));

                    // Obtener mes y año seleccionados
                    const mes = parseInt(document.getElementById('mesSelector').value);
                    const anio = parseInt(document.getElementById('anioSelector').value);

                    const fecha = new Date(anio, mes, selectedDay);

                    // Formatear el mensaje: Sábado 6 de enero
                    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
                    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

                    const nombreDia = diasSemana[fecha.getDay()];
                    const nombreMes = meses[mes];

                    const mensaje = document.getElementById('mensaje');
                    mensaje.innerHTML = `${nombreDia} ${selectedDay} de ${nombreMes}`;
                    mensaje.style.color = "red";
                });
            });
        });
    });
}

// Generar horas dinámicas
function generarHoras() {
    const selectHora = document.getElementById("hora");
    selectHora.innerHTML = '<option value="">Selecciona una hora</option>'; // Reset
    for (let hora = 10; hora <= 19; hora++) {
        const formato = hora < 12 ? "AM" : "PM";
        const horaFormateada = hora > 12 ? hora - 12 : hora;
        selectHora.innerHTML += `<option value="${hora}:00">${horaFormateada}:00 ${formato}</option>`;
    }
}

// Función para agendar la cita
function agendarCita() {
    const nombre = document.getElementById('nombre').value;
    const hora = document.getElementById('hora').value;
    const mensaje = document.getElementById('mensaje');

    // Obtener día seleccionado
    const diaSeleccionado = document.querySelector('.box.bg-blue-500');
    const mes = parseInt(document.getElementById('mesSelector').value);
    const anio = parseInt(document.getElementById('anioSelector').value);

    if (!diaSeleccionado) {
        Swal.fire({
            title: "Selecciona un día",
            icon: "warning"
        });
        return;
    }
    const dia = parseInt(diaSeleccionado.getAttribute('data-day'));
    const fecha = new Date(anio, mes, dia);

    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const diaNombre = diasSemana[fecha.getDay()];
    const mesNombre = meses[fecha.getMonth()];
    const fechaFormateada = `${diaNombre} ${dia} de ${mesNombre}`;
    if (nombre && hora) {
        Swal.fire({
            title: "¡Cita agendada!",
            html: `<strong>${nombre}</strong>, tu cita sera el proximo <strong>${fechaFormateada}</strong> a las <strong>${hora}</strong>.`,
            icon: "success",
            confirmButtonText: "Aceptar"
        });
        document.getElementById("citaForm").reset();
        document.querySelectorAll('.box').forEach((d) => d.classList.remove('bg-blue-500'));
    } else {
        Swal.fire({
            title: "Completa todos los campos",
            icon: "error"
        });
    }
}

function inicializarSelectores() {
    const mesSelector = document.getElementById("mesSelector");
    const anioSelector = document.getElementById("anioSelector");

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    meses.forEach((mes, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = mes;
        mesSelector.appendChild(option);
    });

    const anioActual = new Date().getFullYear();
    for (let i = anioActual; i <= anioActual + 1; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        anioSelector.appendChild(option);
    }

    mesSelector.value = fechaActual.getMonth();
    anioSelector.value = fechaActual.getFullYear();

    mesSelector.addEventListener("change", () => {
        generarCalendario(parseInt(mesSelector.value), parseInt(anioSelector.value));
    });

    anioSelector.addEventListener("change", () => {
        generarCalendario(parseInt(mesSelector.value), parseInt(anioSelector.value));
    });
}

// Inicializar todo al cargar
const fechaActual = new Date();
inicializarSelectores();
generarCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
generarHoras();


//fin

//barra busqueda
// Barra de búsqueda
// Variables necesarias
const searchInput = document.getElementById('search-box'); // Barra de búsqueda
const searchResults = document.createElement('ul'); // Lista de resultados sugeridos
searchResults.classList.add('search-suggestions');
document.querySelector('.search-form').appendChild(searchResults);

// Diccionario con las secciones y palabras clave
const sections = {
    "nosotros": "index.html#home",
    "servicios": "servicios.html",
    "citas": "index.html#citas",
    "tienda": "index.html#products",
    "contactos": "index.html#contact",
    "sedes": "index.html#mapa",
    "mapa": "index.html#mapa",
    "diseño y estilo": "servicios.html#diseno-estilo",
    "cuidado facial": "servicios.html#cuidado-facial",
    "corte de cabello": "servicios.html#corte",
    "corte cabello": "servicios.html#corte",
    "cabello": "servicios.html#corte",
    "barbería": "servicios.html#barba",
    "corte": "servicios.html#corte",
    "barba": "servicios.html#barba",
    "barberia": "servicios.html#barba",
    "afeitado": "servicios.html#barba", // Palabra clave adicional para barba
    "cejas": "servicios.html#cejas",
    "ceja": "servicios.html#cejas",
    "tinta": "servicios.html#tinte",
    "tintas": "servicios.html#tinte",
    "tinte": "servicios.html#tinte",
    "limpieza facial": "servicios.html#limpieza-facial",
    "exfoliación": "servicios.html#exfoliacion-facial",
    "mascarilla": "servicios.html#mascarilla-facial",
    "hidratación": "servicios.html#hidratacion-facial",
    "limpieza": "servicios.html#limpieza-facial",
    "exfoliacion": "servicios.html#exfoliacion-facial",
    "mascarillas": "servicios.html#mascarilla-facial",
    "hidratacion": "servicios.html#hidratacion-facial",
    "servicios": "servicios.html",
    "servicio": "servicios.html",
    "servicios de corte": "servicios.html#corte",
    "servicios de barbería": "servicios.html#barba",
    "servicios de cejas": "servicios.html#cejas",
    "inicio sesion": "index.html#registro",
    "registro": "index.html#registro",
    "login": "index.html#registro",
    "registro de usuario": "index.html#registro",
    "registro usuario": "index.html#registro",
    "crear cuenta": "index.html#registro",
    "crear usuario": "index.html#registro",
    "usuario": "index.html#registro",
    "usuarios": "index.html#registro",
    "contraseña": "index.html#registro",
    "contraseñas": "index.html#registro",
    "password": "index.html#registro",
    "exfoliación facial": "servicios.html#exfoliacion-facial",
    "mascarilla facial": "servicios.html#mascarilla-facial",
    "hidratación facial": "servicios.html#hidratacion-facial"
};

// Función para filtrar y mostrar sugerencias
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = ''; // Limpia sugerencias previas

    if (query) {
        for (const [key, value] of Object.entries(sections)) {
            if (key.includes(query)) {
                const li = document.createElement('li');
                li.textContent = key;
                li.dataset.target = value;
                li.classList.add('search-item');
                searchResults.appendChild(li);
            }
        }
    }
});

// Evento para seleccionar una sugerencia
searchResults.addEventListener('click', function (event) {
    const target = event.target.dataset.target;
    if (target) {
        window.location.href = target; // Redirige a la sección seleccionada
        searchResults.innerHTML = ''; // Limpia las sugerencias
        searchInput.value = ''; // Limpia la barra de búsqueda
    }
});

// Navegar al presionar Enter con el texto completo
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const query = searchInput.value.toLowerCase().trim();
        for (const [key, value] of Object.entries(sections)) {
            if (key === query) {
                window.location.href = value; // Redirige a la sección
                searchResults.innerHTML = ''; // Limpia las sugerencias
                searchInput.value = ''; // Limpia la barra de búsqueda
                break;
            }
        }
    }
});

//fin
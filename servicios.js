document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los elementos de imagen
    const images = document.querySelectorAll('.image');
    
    // Obtener el modal y los elementos dentro de él
    const modal = document.getElementById('service-modal');
    const closeModalButton = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalPrice = document.getElementById('modal-price');
    const addToCartButton = document.getElementById('add-to-cart');

    // Información de los servicios que se mostrarán en el modal
    const serviceDetails = {
        CORTE: {
            title: 'Corte',
            description: 'Un corte de cabello profesional diseñado para realzar tu estilo y personalidad. Nuestros expertos estilistas te asesorarán para encontrar el look que mejor se adapte a ti, ya sea clásico, moderno o vanguardista.',
            price: '$25.000',
            image: 'https://imagizer.imageshack.com/img924/360/h45gXn.jpg'
        },
        BARBA: {
            title: 'Barba',
            description: 'Corte y diseño de barba para un look impecable. Nuestro servicio incluye recorte, perfilado y tratamiento para mantener tu barba con un aspecto limpio y cuidado, adaptado a la forma de tu rostro.',
            price: '$10.000',
            image: 'https://imagizer.imageshack.com/img923/9378/V3Igbf.jpg'
        },
        CEJAS: {
            title: 'Cejas',
            description: 'Dale forma a tus cejas con nuestro servicio de diseño personalizado. Utilizamos técnicas precisas para resaltar la expresión de tu rostro, garantizando un acabado limpio y natural.',
            price: '$5.000',
            image: 'https://imagizer.imageshack.com/img924/2705/hwhZkO.jpg'
        },
        TINTE: {
            title: 'Tinte',
            description: 'Renueva tu estilo con un cambio de color. Ofrecemos una amplia gama de tonos y técnicas de tinte para conseguir el look perfecto, desde colores clásicos hasta opciones atrevidas y modernas.',
            price: '$20.000',
            image: 'https://imagizer.imageshack.com/img923/1430/9i1C66.jpg'
        },
        LIMPIEZA: {
            title: 'Limpieza Facial',
            description: 'Limpieza profunda para eliminar impurezas, exceso de grasa y células muertas. Deja tu piel limpia, fresca y revitalizada con nuestro tratamiento profesional',
            price: '$15.000',
            image: 'https://imagizer.imageshack.com/img923/9950/vU4aAg.jpg'
        },
        EXFOLIACIÓN: {
            title: 'Exfoliación Facial',
            description: 'Exfoliación que elimina suavemente las células muertas, ayudando a regenerar la piel. Logra un cutis suave y radiante con nuestro tratamiento especializado.',
            price: '$8.000',
            image: 'https://imagizer.imageshack.com/img923/2244/EgeVnJ.jpg'
        },
        MASCARILLA: {
            title: 'Mascarilla Facial',
            description: 'Hidrata y nutre tu piel con nuestras mascarillas faciales adaptadas a tus necesidades. Desde rejuvenecimiento hasta control de grasa, tenemos el tratamiento perfecto para ti',
            price: '$10.000',
            image: 'https://imagizer.imageshack.com/img923/702/jVQv95.jpg'
        },
        HIDRATACIÓN: {
            title: 'Hidratación Facial',
            description: 'Tratamiento intensivo que restaura la hidratación natural de la piel, dejándola suave y saludable. Ideal para pieles deshidratadas o que necesitan un cuidado especial.',
            price: '$12.000',
            image: 'https://imagizer.imageshack.com/img923/4079/GLmdNu.jpg'
        }
    };

    // Añadir el evento de clic a cada imagen
    images.forEach(image => {
        image.addEventListener('click', function() {
            const service = this.getAttribute('data-service'); // Obtener el servicio al que pertenece la imagen
            const details = serviceDetails[service]; // Obtener los detalles del servicio

            if (details) {
                // Actualizar el contenido del modal
                modalTitle.textContent = details.title;
                modalDescription.textContent = details.description;
                modalPrice.textContent = details.price;
                modalImage.src = details.image; // Establecer la imagen pequeña en el modal

                // Mostrar el modal
                modal.classList.remove('hidden');
            }
        });
    });

    // Cerrar el modal cuando se haga clic en el botón
    closeModalButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

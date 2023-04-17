function generateCards(titles, images) {
    // Obtener el contenedor de las tarjetas
    const container = document.getElementById('card-container');

    // Crear varias tarjetas de Bootstrap
    for (let i = 0; i < titles.length; i++) {
      // Crear el elemento de la tarjeta
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.width = '12rem';
      card.style.margin='5px';
      // Agregar la imagen de la tarjeta
      const image = document.createElement('img');
      image.classList.add('card-img-top');
      image.src = images[i];
      image.alt = 'Card image';
      card.appendChild(image);

      // Agregar el cuerpo de la tarjeta
      const body = document.createElement('div');
      body.classList.add('card-body');
      card.appendChild(body);

      // Agregar el título de la tarjeta
      const title = document.createElement('h6');
      title.classList.add('card-title');
      title.innerText = titles[i];
      body.appendChild(title);

      // Agregar el texto de la tarjeta
      //const text = document.createElement('p');
      //text.classList.add('card-text');
      //text.innerText = `Este es el texto de la tarjeta ${i}`;
      //body.appendChild(text);

      // Agregar el botón de la tarjeta
      const button = document.createElement('a');
      button.classList.add('btn', 'btn-primary');
      button.href = '#';
      button.innerText = 'Go to project';
      body.appendChild(button);

      // Agregar la tarjeta al contenedor
      const column = document.createElement('div');
      column.classList.add('col-4');
      column.appendChild(card);
      container.appendChild(column);
    }
  }

  // Ejemplo de uso de la función
  const titles = ['Gestion jardin infantil', 'Simulador Blockchain', 'Programa para veterinaria','Diagnosticos clinicos', 'Ecommerce-Ferreteria', 'Foro tecnologico'];
  const images = ['media/projects.jpg', 'media/projects.jpg', 'media/projects.jpg', 'media/projects.jpg', 'media/projects.jpg', 'media/projects.jpg'];
  const link =['https://github.com/AndersonPM-HUB/MascotaFeliz.App','' ]
  generateCards(titles, images);
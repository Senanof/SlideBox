fetch('templates.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('template-container');

    data.forEach(template => {
      const card = document.createElement('div');
      card.className = 'template-card';
      card.innerHTML = `
        <img src="${template.image}" alt="${template.title}" />
        <p>${template.title}</p>
        <a href="https://wa.me/994XXXXXXXXX?text=${encodeURIComponent(template.waText)}" class="btn" target="_blank">Əlaqə saxla</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('JSON yüklənmədi:', error));

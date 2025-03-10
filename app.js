
  // Obtén los botones y los contenedores
  const btnGrid = document.getElementById('btnGrid');
  const btnScroll = document.getElementById('btnScroll');
  const gridContainer = document.getElementById('gridContainer');
  const scrollContainer = document.getElementById('scrollContainer');

  // Al hacer clic en el botón "Grid"
  btnGrid.addEventListener('click', () => {
    gridContainer.classList.remove('d-none'); // Muestra el contenedor grid
    scrollContainer.classList.add('d-none'); // Oculta el contenedor scroll
  });

  // Al hacer clic en el botón "Scroll"
  btnScroll.addEventListener('click', () => {
    scrollContainer.classList.remove('d-none'); // Muestra el contenedor scroll
    gridContainer.classList.add('d-none'); // Oculta el contenedor grid
  });

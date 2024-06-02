const call = document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.call-open');

  function setCallIcon() {
    if (document.documentElement.clientWidth >= 360 && 
      document.documentElement.clientWidth <= 1439) {
      openButton.innerHTML = '<img src="./images/call.svg" alt="">';
    } else {
      openButton.innerHTML = 'Заказать звонок';
    }
  };

  setCallIcon()

  window.addEventListener('resize', () => {
    setCallIcon();
  });
})

const application = document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.call-open');
  const closeButton = document.querySelector('.call-close');
  const form = document.querySelector('.application');
  const overlay = document.querySelector('.overlay_application');

  openButton.addEventListener('click', () => {
    form.classList.add('show');
    overlay.classList.add('visible');
  });

  closeButton.addEventListener('click', () => {
    form.classList.remove('show');
    overlay.classList.remove('visible');
  });
});

const burger = document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.burger-open');
  const closeButton = document.querySelector('.burger-close');
  const sidebar = document.querySelector('.burger');
  const overlay = document.querySelector('.overlay_burger');
  const lineBottom = document.querySelector('.burger-open__line_bottom')

  function toggleBurger() {
    const isOpen = sidebar.classList.contains('open');

    if (isOpen) {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      lineBottom.classList.remove('changed');
    } else {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
      lineBottom.classList.add('changed');
    }
  };

  openButton.addEventListener('click', toggleBurger);
  closeButton.addEventListener('click', toggleBurger);
  overlay.addEventListener('click', toggleBurger);
})


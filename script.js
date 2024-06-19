window.addEventListener('resize', () => {
  location.reload();
});

// Слайдеры

const services = document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 360 && window.innerWidth <= 767) {
    const swiper = new Swiper('.swiper-1', {
      slidesPerView: 1,
      spaceBetween: 230,
      centeredSlides: true,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination-1', 
        clickable: true
      }
    });
  }
});

const awards = document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 360 && window.innerWidth <= 1179) {
    const swiper = new Swiper('.swiper-2', {
      slidesPerView: 1,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination-2', 
        clickable: true
      }
    });
  }
});

// Всплывающие окна

const application = document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.call-open');
  const closeButton = document.querySelector('.call-close');

  const form = document.querySelector('.application');
  const overlay = document.querySelector('.overlay-1');
  const body = document.querySelector('.body');

  openButton.addEventListener('click', () => {
    form.classList.add('show');
    overlay.classList.add('visible');
    body.classList.add('no-scroll');
  });

  closeButton.addEventListener('click', () => {
    form.classList.remove('show');
    overlay.classList.remove('visible');
    body.classList.remove('no-scroll');
  });
});

const burger = document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.burger-open');
  const closeButton = document.querySelector('.burger-close');

  const sidebar = document.querySelector('.burger');
  const overlay = document.querySelector('.overlay-2');
  const lineBottom = document.querySelector('.burger-open__line--bottom');
  const body = document.querySelector('.body');

  function toggleBurger() {
    const isOpen = sidebar.classList.contains('open');

    if (isOpen) {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      lineBottom.classList.remove('changed');
      body.classList.remove('no-scroll');
    } else {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
      lineBottom.classList.add('changed');
      body.classList.add('no-scroll');
    }
  };

  openButton.addEventListener('click', toggleBurger);
  closeButton.addEventListener('click', toggleBurger);

  const items = document.querySelectorAll('.menu__item');

  items.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = item.dataset.target;
      const targetSection = document.querySelector(`.${targetId}`);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });

        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
        lineBottom.classList.remove('changed');
        body.classList.remove('no-scroll');
      }
    });
  });
});

// Изменения кнопок

const call = document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.call-open');

  function setCallIcon() {
    if (window.innerWidth >= 360 && window.innerWidth <= 1179) {
      openButton.innerHTML = '<img src="./images/call.svg" alt="">';
    } else {
      openButton.innerHTML = 'Заказать звонок';
    }
  }

  setCallIcon()

  window.addEventListener('resize', () => {
    setCallIcon();
  });
});

const spoiler = document.querySelector('.spoiler').addEventListener('click', () => {
  const slides = document.querySelectorAll('.services__swiper-wrapper .swiper-slide-1');
  const button = document.querySelector('.spoiler');

  const spoilerIcon = button.classList.contains('services__spoiler--rotate');

  if (spoilerIcon) {
    button.classList.remove('services__spoiler--rotate');
  } else {
    button.classList.add('services__spoiler--rotate');
  }

  if (window.innerWidth >= 768 && window.innerWidth <= 1151) {
    let visible = slides[2].style.display === 'block';

    for (let i = 2; i < slides.length; i++) {
      if (visible) {
        slides[i].style.display = 'none';
      } else {
        slides[i].style.display = 'block';
      }
    }
  } else {
    let visible = slides[3].style.display === 'block';

    for (let i = 3; i < slides.length; i++) {
      if (visible) {
        slides[i].style.display = 'none';
      } else {
        slides[i].style.display = 'block';
      }
    }
  }
});
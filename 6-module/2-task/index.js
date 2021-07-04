'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;
    this.el.insertAdjacentHTML(`beforeend`, `
      <div id="mainCarousel" class="main-carousel carousel slide">
        <ol class="carousel-indicators">
            <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
            <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
            <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
        </ol>
        <div class="carousel-inner">
            <!--Вот здесь будет активный слайд-->
        </div>

        <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>`);
    let slideContainer = this.el.querySelector(`.carousel-inner`);

    let renderSlide = (slide) => {
      return `<div class="carousel-item active" data-item-id=${slide.id}>
          <img src="${slide.img}" alt="Activelide">
          <div class="container">
              <div class="carousel-caption">
                  <h3 class="h1">${slide.title}</h3>
                  <div>
                      <a class="btn" href="#" role="button">
                          View all DEALS
                          <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                      </a>
                  </div>
              </div>
          </div>
      </div>`;
    }

    slideContainer.insertAdjacentHTML(`beforeend`, renderSlide(this.slides[0]) );

    this.el.addEventListener(`click`, (event) => {
      let target = event.target;
      let id = +slideContainer.firstElementChild.dataset.itemId;


      if (target.parentElement.className === `carousel-control-next`) {
        slideContainer.innerHTML = ``;
        if (id === this.slides.length -1 ) id = -1;
        slideContainer.insertAdjacentHTML(`beforeend`, renderSlide(this.slides[`${id + 1}`]));
        id++;
      }

      if (target.parentElement.className === `carousel-control-prev`) {
        slideContainer.innerHTML = ``;
        if (id === 0 ) id = this.slides.length;
        slideContainer.insertAdjacentHTML(`beforeend`, renderSlide(this.slides[`${id - 1}`]));
        id--;
      }

      if (target.className === `carousel-indicator`) {
        slideContainer.innerHTML = ``;
        slideContainer.insertAdjacentHTML(`beforeend`, renderSlide(this.slides[+target.dataset.slideTo]));
      }

    })
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;

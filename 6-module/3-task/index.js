'use strict';

export class Menu {

  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">

       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

      </ul>
    </li>

    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">

       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.element = element;
    element.innerHTML = this.template;
    let listItems = element.querySelectorAll(`.list-group-item`);
    for (let listItem of listItems) {

      listItem.classList.add(`backdrop`);
      let dropdownUl = listItem.querySelector(`.dropdown-menu`);

      listItem.addEventListener(`pointerenter`, () => {
        listItem.classList.add(`show`);
        dropdownUl.classList.add(`show`);
      });

      listItem.addEventListener(`pointerleave`, () => {
        listItem.classList.remove(`show`);
        dropdownUl.classList.remove(`show`);
      });
    }
  }
}

import { galleryItems } from './gallery-items.js';
const galleryRender = document.querySelector(".gallery")
// Change code below this line
galleryItems.forEach(el=>{
    galleryRender.insertAdjacentHTML("beforeend", `<li class="gallery__item">
    <a class="gallery__link" href="${el.original}">
        <img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}" />
    </a>
    </li>`)
})
function fullscreenImageOpener(event){
  event.preventDefault()
if(event.target.nodeName !== "IMG"){
  return
}
const selectedImage = event.target.dataset.source;

const fullscreenImage = basicLightbox.create(`<img src="${selectedImage}">`)
fullscreenImage.show()
function escapeHandler(e){
  if(e.key === "Escape") {
    fullscreenImage.close();
    document.removeEventListener('keydown', escapeHandler);
  }
}
galleryRender.addEventListener("keydown", escapeHandler);
}
galleryRender.addEventListener("click", fullscreenImageOpener)
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const imageMarkup = createImageCarts(galleryItems);

gallery.insertAdjacentHTML("beforeend", imageMarkup);
gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

    const selectImage = e.target.getAttribute("data-source");

    const instance = basicLightbox.create(`
  <img src="${selectImage}" width="800" height="600">
`);

    instance.show();

    gallery.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            instance.close();
        }
    });
});

function createImageCarts(galleryItems) {
    const markup = galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
        })
        .join("");

    return markup;
}

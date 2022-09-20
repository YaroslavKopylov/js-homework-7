import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", createImageCarts(galleryItems));
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    closeText: "x",
    showCounter: false,
});
gallery.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }
});

function createImageCarts(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>`;
        })
        .join("");
}

// gallery.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (e.target.nodeName !== "IMG") {
//         return;
//     }

//     const selectImage = e.target.getAttribute("data-source");

//     const instance = basicLightbox.create(`
//   <img src="${selectImage}" width="800" height="600">
// `);

//     instance.show();

// gallery.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//         instance.close();
//     }
// });
// });

// function createImageCarts(galleryItems) {
//     const markup = galleryItems
//         .map(({ preview, original, description }) => {
//             return `<a class="gallery__item" href="${original}">
//             <img class="gallery__image" src="${preview}" alt="${description}" />
//           </a>`;
//         })
//         .join("");

//     return markup;
// }

// function imageHandler(e) {
//     if (e.target.nodeName !== "IMG") {
//         return;
//     }
//     let lightbox = new SimpleLightbox(".gallery a", {
//         captions: true,
//         captionPosition: "bottom",
//         captionDelay: 250,
//         captionsData: alt,
//     });
// }
// gallery.addEventListener("click", imageHandler);

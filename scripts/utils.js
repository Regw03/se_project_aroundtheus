

export function openPopup(popup) {
  popup.classList.add("popup_is-open");
  document.addEventListener('keydown', handleEscape);
  popup.addEventListener('click', handleOverlayClick);
};

export function handleOverlayClick(event) {
    if (event.target.classList.contains("popup_is-open")) {
      
      closePopup(event.target);
    };
};

export function closePopup(popup) {
  popup.classList.remove("popup_is-open");
  document.removeEventListener('keydown', handleEscape);
  popup.removeEventListener('click', handleOverlayClick);
};

export function handleEscape(e) {
    const key = e.key;
    if (key === "Escape") {
      const openedPopup = document.querySelector(".popup_is-open");
      closePopup(openedPopup);
    };
};

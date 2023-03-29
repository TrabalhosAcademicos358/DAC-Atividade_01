export const closeModal = (idModal) => {
    const modal = document.querySelector(idModal);
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
}
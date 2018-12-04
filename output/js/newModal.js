class Modal {
  static listen(){
  }

  static toggleModal(modal) {
      console.log(modal);
      modal.classList.toggle("show-modal");
  }


}

export default Modal;

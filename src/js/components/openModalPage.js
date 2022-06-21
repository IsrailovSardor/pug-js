import {
    openForm,
  } from "./FormValidatingFunction";
function openModalPage() {
    let openBtn=document.querySelector("#open-modal");
    let closeBtn=document.querySelector(".modal-page__close");

    openBtn.addEventListener("click", ()=>{
        openForm();
    })
    closeBtn.addEventListener("click", ()=>{
        openForm();
    })
}

export default openModalPage;
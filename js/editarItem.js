import { criarData } from "./criarData.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if(novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

                // Remove a data antiga se existir e cria a nova data
        const dataExistente = elemento.querySelector(".texto-data");
        if (dataExistente) dataExistente.remove();
        criarData(elemento);

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if(estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }

    }
}
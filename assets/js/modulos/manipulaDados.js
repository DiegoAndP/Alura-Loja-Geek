const importa = (produto) => {
   return JSON.parse(localStorage.getItem(produto));
} 

const exporta = (produto,lista) => {
   localStorage.setItem(produto, JSON.stringify(lista));
}

const valores = (produto) => {
    return Object.values(importa(produto));
}

export const manipulaDados = {
    importa,
    exporta,
    valores
}
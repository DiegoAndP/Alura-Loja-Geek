document.querySelectorAll(".adiciona__imagem").forEach((input) => {
  const dropElement = input.closest(".adiciona__wrapper");

  dropElement.addEventListener("click", (e) => {
    input.click();
  });

  input.addEventListener("change", (e) => {
    if (input.files.length) {
      atualizaThumbnail(dropElement, input.files[0]);
    }
  });

  dropElement.addEventListener("dragover", (ev) => {
    ev.preventDefault();

    dropElement.classList.add("adiciona__wrapper-ativo");
  });

  ["dragleave", "dragend"].forEach((tipoDeEvento) => {
    dropElement.addEventListener(tipoDeEvento, (e) => {
      dropElement.classList.remove("adiciona__wrapper-ativo");
    });
  });

  dropElement.addEventListener("drop", (ev) => {
    ev.preventDefault();

    if (ev.dataTransfer.files.length) {
      input.files = ev.dataTransfer.files;
      atualizaThumbnail(dropElement, ev.dataTransfer.files[0]);
    }

    dropElement.classList.remove("adiciona__wrapper-ativo");
  });
});

function atualizaThumbnail(dropElement, file) {
  let thumbElement = dropElement.querySelector(".adiciona__thumb");

  if (dropElement.querySelector(".adiciona__texto")) {
    dropElement.querySelector(".adiciona__texto").remove();
    dropElement.querySelector(".adiciona__logo").remove();
  }

  if (!thumbElement) {
    thumbElement = document.createElement("div");
    thumbElement.classList.add("adiciona__thumb");
    dropElement.appendChild(thumbElement);
  }

  thumbElement.dataset.label = file.name;

  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      thumbElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbElement.style.backgroundImage = null;
  }
}

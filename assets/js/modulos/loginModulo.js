const inputLogin = document.querySelector("[data-email]");
const inputForm = document.querySelector("[data-password]");
const inputBotao = document.querySelector("[data-btnlogin]");

const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensagensErro = {
  email: {
    valueMissing: "O campo email não pode estar vazio.",
    valueMismatch: "O email não é válido",
    patternMismatch: "O email precisa ter '@' e provedor.",
    typeMismatch: "Complete com o provedor e domínio.",
  },
  senha: {
    valueMissing: "O campo senha não pode estar vazio.",
    patternMismatch:
      "A senha precisa ter ao menos uma letra maiúscula, números e ter entre 6 e 12 caractéres.",
  },

  nome: {
    valueMissing: "O campo nome não pode estar vazio",
    patternMismatch:
      "Não use números, caractéres especiais ou mais que 30 caractéres ",
  },

  mensagem: {
    valueMissing: "O campo mensagem não pode estar vazio",
  },

  produto: {
    valueMissing: "O campo preço não pode estar vazio,",
    patternMismatch: "O campo precisa ser maior que 5 ou menor que 30 caractéres."
  },

  preco: {
    valueMissing: "O campo preço não pode estar vazio",
    patternMismatch: "Obedeça o formato de preço",
  },

  categoria: {
    valueMissing: "O campo categoria não pode estar vazio",
    patternMismatch: "Somente números e entre 5 e 15 letras."

  }
  

};

//Confirma se Email e senha estão corretos para dar acesso a página de adição de produtos

const validaLogin = () => {
  const botao = document.querySelector("[data-btnlogin]");
  const login = document.querySelector("[data-email]");
  const senha = document.querySelector("[data-password]");
  if (login.validity.valid && senha.validity.valid) {
    botao.disabled = false;
    botao.addEventListener("click", (ev) => {
      ev.preventDefault();
      if (login.value === "alura@geek.com" && senha.value === "Alura123") {
        alert("Acesso Garantido!");
        window.location.href = "./adicionar.html";
      } else {
        alert("Houve um problema com o seu Email ou senha");
      }
    });
  }
};



export function validacao(input) {
  const inputTipo = input.dataset.tipo; //Seleciona o dataset das inputs de toda a página

  if (inputTipo) {

    if (input.validity.valid) {
      input.nextElementSibling.classList.remove(".login__hide");
      input.nextElementSibling.innerHTML = "";
      input.style.outlineColor = "#2A7AE4";
    } else {
      input.nextElementSibling.classList.add(".login__hide");
      input.nextElementSibling.innerHTML = mostraErros(inputTipo, input);
      input.style.outlineColor = "tomato";
    };

    if(document.querySelector("[data-btnlogin]")) {
      validaLogin();
    };
  };

}

function mostraErros(inputTipo, input) {
  let mensagem = "";
  tiposDeErro.forEach((erros) => {
    if (input.validity[erros]) {
      mensagem = mensagensErro[inputTipo][erros];
    }
  });
  return mensagem;
}

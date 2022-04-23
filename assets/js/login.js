
const inputLogin = document.querySelector('[data-email]');
const inputForm = document.querySelector('[data-password]');

//Adiciona um escutador de eventos para cada caixa de texto
const inputAll = document.querySelectorAll("input");
    inputAll.forEach(input => {
        input.addEventListener('input', (ev) => {
            validacao(ev.target);
        });
    });

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensErro = {
    email: {
        valueMissing: "O campo email não pode estar vazio.",
        valueMismatch: "O email não é válido" ,
        patternMismatch: "O email precisa ter '@' e provedor.",
        typeMismatch: "Complete com o provedor e domínio."
    },
    senha: {
        valueMissing: "O campo senha não pode estar vazio.",
        patternMismatch: "A senha precisa ter ao menos uma letra maiúscula, números e ter entre 6 e 12 caractéres."
    }
}


function validacao(input) {
    inputTipo = input.dataset.tipo; //Seleciona o dataset das inputs de toda a página
    
    if(validadores[inputTipo]) {
       validadores[inputTipo][input];

    };


    if (input.validity.valid) {
        input.nextElementSibling.classList.remove('.login__hide');
        input.nextElementSibling.innerHTML = '';
        input.style.outlineColor='#2A7AE4';
    }else {
        input.nextElementSibling.classList.add('.login__hide');
        input.nextElementSibling.innerHTML = mostraErros(inputTipo, input);
        input.style.outlineColor='tomato';
    }
}

function mostraErros (inputTipo, input) {
    let mensagem = '';
    validaEmailCustom(input);
    validaSenhaCustom(input);
    tiposDeErro.forEach(erros => {
        if (input.validity[erros]) {
            mensagem = mensagensErro[inputTipo][erros];
        };
    })
    return mensagem;
};


const validadores = {
    email: input => validaEmailCustom(input),
    senha: input => validaSenhaCustom(input)
}

function validaEmailCustom (input) {
        let mensagem;
        const regex = /^(.*)(@+.*)$/g;
        if (regex.test(input.value)) {
            emailBoolean = true;
        } else {
            mensagem =  input.setCustomValidity = "Email precisa ter o símbolo @ e provedor";
        }
        return mensagem;
}

function validaSenhaCustom (input) {
        let mensagem;
        const regex = /^(?=.*[A-Za-z])(?=.*\d+)(?!.*[@!#$%¨&*\\]).{8,20}$/g;
        if (regex.test(input.value)) {
        }else {
            mensagem =  input.setCustomValidity = "A senha precisa ter ao menos uma letra maiúscula, um número e possuir entre 8 e 20 caractéres.";
        }

        return mensagem;
}




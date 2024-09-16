// Seleciona os elementos do DOM
let sliderElement = document.querySelector("#slider");
let button = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let Containerpassword = document.querySelector("#container-password");

// Define o conjunto de caracteres para a senha
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";

// Inicializa a variável para a nova senha
let novaSenha = "";

// Define o valor inicial do comprimento da senha
sizePassword.innerHTML = sliderElement.value;

// Adiciona um ouvinte de eventos para o slider para atualizar o comprimento da senha exibido
sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
}

// Função para gerar a senha
function generatePassword() {
    let pass = "";
    // Gera a senha com base no comprimento definido pelo slider
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    Containerpassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

// Função para copiar a senha para a área de transferência
function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
}

// Adiciona um ouvinte de eventos ao botão para gerar a senha
button.addEventListener("click", generatePassword);

// Adiciona um ouvinte de eventos ao botão de copiar a senha
document.querySelector("#copy-button").addEventListener("click", copyPassword);

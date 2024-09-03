const form = document.getElementById("form");
const username = document.getElementById("username")
const cpf = document.getElementById("cpf")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const cnpj = document.getElementById("cnpj")
const razao = document.getElementById("razao")
const password = document.getElementById("password")



form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})


function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha um username!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}


function checkInputCpf(){
    const cpfValue = cpf.value;
  
    if(cpfValue === ""){
        errorInput(cpf, "O cpf é obrigatória.")
      }else if(cpfValue.length < 11){
        errorInput(cpf, "O cpf precisa ter no mínimo 11 caracteres.")
    }else{
      const formItem = cpf.parentElement;
      formItem.className = "form-content"
    }
  
  
  }

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}

function checkInputTelefone(){
    const telefoneValue = telefone.value;
  
    if(telefoneValue === ""){
        errorInput(telefone, "O telefone é obrigatório.")
      }else if(telefoneValue.length < 11){
        errorInput(telefone, "O telefone precisa ter no mínimo 11 caracteres.")
    }else{
      const formItem = telefone.parentElement;
      formItem.className = "form-content"
    }
  
  
  }
  function checkInputCnpj(){
    const cnpjValue = cnpj.value;
  
    if(cnpjValue === ""){
        errorInput(cnpj, "O cnpj é obrigatório.")
      }else if(cnpjValue.length < 11){
        errorInput(cnpj, "O cnpj precisa ter no mínimo 14 caracteres.")
    }else{
      const formItem = cnpj.parentElement;
      formItem.className = "form-content"
    }
  
  
  }
  function checkInputRazao(){
    const razaoValue = razao.value;
  
    if(razaoValue === ""){
      errorInput(razao, "A razão social é obrigatória.")
    }else{
      const formItem = razao.parentElement;
      formItem.className = "form-content"
    }
  
  
  }

function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "A senha é obrigatória.")
  }else if(passwordValue.length < 8){
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
  }else{
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }


}




function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputCnpj();
  checkInputCpf();
  checkInputRazao();
  checkInputTelefone();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}

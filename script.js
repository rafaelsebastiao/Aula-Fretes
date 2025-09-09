/* Tags HTML */
let inputNome = window.document.querySelector("input#nome");

let inputCPF = window.document.querySelector("input#cpf");

let inputEmail = window.document.querySelector("input#email")

let inputSenha = window.document.querySelector("input#senha")

let radioMasculino = window.document.querySelector("input#masculino")

let radioFeminino = window.document.querySelector("input#feminino")

let radioOutro = window.document.querySelector("input#outro")

let checkTecnologia = window.document.querySelector("input#tecnologia")

let checkEsportes = window.document.querySelector("input#esportes")

let checkMusica = window.document.querySelector("input#musica")

let selectEstado = window.document.querySelector("select#estado")

let buttonSubmit = window.document.getElementsByTagName("button")[0];



const verificaEspacos = (nome) =>{
    let quantEspacos = 0;
    
    for(let ch of nome){
        if(ch == ' ' ){
            quantEspacos += 1
        }
    }

    return quantEspacos
}

//Validação cpf
const validacaoCPF = (cpf) => {
    let numCPF=0;
    let operador=10

    let d10=0, d11=0

    if(cpf.length == 11){
        for(let i = 0; i < 9; i++){ 
            numCPF += operador * parseInt(cpf[i] )
            operador -= 1
        }
        
        if(numCPF < 2){
            d10 = 0
        }else{
            d10 = 11 - (numCPF % 11)
        }
        
        
        numCPF = 0
        operador = 11

        for (let i = 0; i < 10; i++) {
            numCPF += operador * parseInt(cpf[i])
            operador -= 1
        }
        
        if (numCPF < 2) {
            d11 = 0
        } else {
            d11 = 11 - (numCPF % 11)
        }
       
        
       alert(d10)
       alert(d11)
       if(cpf[9] != d10 || cpf[10] != d11){
            alert("CPF inválido!")
            return true
       }


    }else{
        alert("CPF inválido!")
        return true
    }

    return false
}

//Valores
let nomeCompleto, cpf, email, masculino, feminino, tecnologia, esportes, musica

let erros = false

buttonSubmit.addEventListener("click", ()=>{
    let nomeCompleto = inputNome.value 
    let cpf=inputCPF.value
    let email = inputEmail.value
    let senha = inputSenha.value

    let masculino = radioMasculino.checked
    let feminino = radioFeminino.checked
    let tecnologia = checkTecnologia.checked
    let esportes = checkEsportes.checked
    let musica = checkMusica.checked
    
    let estado = selectEstado.value

    let gostos = []
    let genero

    //Validação de nome
    if(nomeCompleto[0] != " " && verificaEspacos(nomeCompleto) == 1){

    }else{
        alert("Nome inválido!")
        erros = true
    }

    //Validação de cpf
    erros = validacaoCPF(cpf)

    //genero
    genero = masculino ? "masculino" : feminino ? "feminino" : "outro"

    //gostos
    if(tecnologia){
        gostos.push("tecnologia")
    }  

    if(esportes){
        gostos.push("Esportes")

    }

    if(musica){
        gostos.push("Música")
    }

    
    //estado
    if(estado == ""){
        alert("Selecione um estado!")
        erros = true
    }

    if(!erros){
        document.body.innerHTML = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bem vindo, ${nomeCompleto}!</h1>
    <hr>
    <h2>Dados</h2>
    <p>Nome Completo: ${nomeCompleto} </p>
    <p>CPF: ${cpf} </p>
    <p>Senha: ${senha}</p>
    <p>Email: ${email}</p>
    <p>Genero: ${genero}</p>
    <p>Gostos: ${gostos}</p>
    <p>Estado: ${estado} </p>
</body>
</html>`

    }

})
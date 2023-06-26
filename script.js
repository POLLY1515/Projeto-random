const raffleButton = document.querySelector(".btn");
const pMessage = document.querySelector(".message")

function chooseNumber(){//pegando o valor dentro do primeiro input
    const initialNumber = parseInt(document.getElementById("initial-number").value);
    //pegando o valor dentro do segundo input
    const finalNumber = parseInt(document.getElementById("final-number").value);
    const inputResult = document.getElementById("input-result");

    if(initialNumber >= finalNumber){
        pMessage.innerHTML = `O primeiro valor deve ser menor que o segundo,tente novamente `
        inputResult.innerHTML = `   `
    
        
    }else{
        const result = Math.floor(Math.random() *(finalNumber - initialNumber + 1)) + initialNumber;
        pMessage.innerHTML = `O número sorteado é `
        inputResult.innerHTML = result
    }
 
    
   
}


//quando o botao `sorter`,for clicado,execute a funcao
raffleButton.addEventListener("click", chooseNumber);
function calcular(){
    let txtA = document.getElementById("altura")
    let txtP = document.getElementById("peso")
    let resultado = document.getElementById("res")
    let altura = Number(txtA.value)
    let peso = Number(txtP.value)
    let imc = peso / altura**2
    
    if(txtA.value>2 ){
        window.alert("[ERRO] O VALOR DA ALTURA DEVE SER EM METROS")
        
    }else if(txtA.value ==0 || txtP.value ==0){
        window.alert("[ERRO] PREENCHA TODOS OS DADOS E TENTE NOVAMENTE!")
    }
    else{
        resultado.innerHTML = `IMC de: ${imc.toFixed(2)}`
        if(imc<18.5){
            resultado.innerHTML += `<p>Abaixo do peso</p>`
            
        }
        else{
            if(imc>=18.6 && imc <=24.9){
                resultado.innerHTML += `<p>Peso ideal</p>`
    
            }
            else{
                if(imc>=25 && imc<=29.9){
                    resultado.innerHTML += `<p>Levemente acima do peso</p>`
                }
                else{
                    if(imc>=30 && imc<=34.9){
                        resultado.innerHTML += `<p>Obesidade grau 1</p>`
                    }
                    else{
                        if(imc>=35 && imc<=39.9){
                            resultado.innerHTML += `<p>Obesidade grau 2 (Severa)</p>`
    
                        }
                        else{
                            if(imc>40){
                                resultado.innerHTML += `<p>Obesidade grau 3 (Mórbida)</p>`
                            }
                        }
                    }
                }
    
            }
        }
         
    }

}


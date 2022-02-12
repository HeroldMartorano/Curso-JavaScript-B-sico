function carregar(){
    //Variaveis que vão formar o relógio
    let agora = new Date
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let diaSem = agora.getDay()
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()

    //Variaveis que interage com o HTML
    let msg = document.getElementById('msg')
    let foto = document.getElementById('imagem')

    //Variavel que formata horas e minutos para o formato digital '00:00' 
    let format = (hora < 10? '0' + hora : hora )  + `:` + (minutos <10? '0' + minutos : minutos )

    msg.innerHTML += `<p><strong>${format}</strong></p>`

    switch(diaSem){
        case 0:
            msg.innerHTML += 'Domingo, '
            break

        case 1:
            msg.innerHTML += 'Segunda-Feira, '
            break

        case 2:
            msg.innerHTML += 'Terça_Feira, '
            break
        case 3: 
            msg.innerHTML += 'Quarta-Feira, '
        break
        case 4:
            msg.innerHTML += 'Quinta-Feira, '
            break
        case 5:
            msg.innerHTML += 'Sexta-Feira, '
            break
        case 6 :
            msg.innerHTML += 'Sábado, '
            break
            default:
               Window.alert("[ERRO] DIA INVALIDO")
                break
    }
    
    switch(mes){
        case 0:
            msg.innerHTML += `${dia} de Janeiro de ${ano}`
            break
        case 1: 
            msg.innerHTML += `${dia} de Fevereiro de ${ano}`
            break
        case 2: 
            msg.innerHTML += `${dia} de Março de ${ano}`
            break
        case 3: 
            msg.innerHTML += `${dia} de Abril de ${ano}`
            break
        case 4:
            msg.innerHTML += `${dia} de Maio de ${ano}`
            break
        case 5:
            msg.innerHTML += `${dia} de Junho de ${ano}`
            break
        case 6: 
            msg.innerHTML += `${dia} de Julho de ${ano}`
            break
        case 7:
            msg.innerHTML += `${dia} de Agosto de ${ano}`
            break
        case 8: 
            msg.innerHTML += `${dia} de Setembro de ${ano}`
            break
        case 9: 
            msg.innerHTML += `${dia} de Outubro de ${ano}`
            break
        case 10: 
            msg.innerHTML += `${dia} de Novembro de ${ano}`
            break
        case 11:
            msg.innerHTML += `${dia} de Dezembro de ${ano}`
            break
        default:
            window.alert("[ERRO] MÊS INVALIDO")
            break
    } 
    
    if(hora >=5 && hora <8){ //Dia com foto de amanhecer: Vai escrever Bom Dia.
        msg.innerHTML += `<p><strong>Bom Dia</strong></p>`
        foto.src = 'dia1.png'
        document.body.style.background = '#d3752e'  

    }else if(hora >=8 && hora <12){ //Dia com foto de sol forte : Vai escrever Bom Dia.
        msg.innerHTML += `<p><strong>Bom Dia</strong></p>`
        foto.src = 'diatarde.png'
        document.body.style.background = '#3365a4'

    }else if(hora === 16 && minutos === 20){ //Vai fazer alusão ao meme Quatro e Vinte é horario de fumar.
        msg.innerHTML += `<p><strong>Boa Tarde hehehe</strong></p>`
        foto.src = 'SnoopDog.png'
        document.body.style.background = '#228B22'
        
    } else if(hora >=12 && hora <17){ //Tarde com foto de sol forte: Vai escrever Boa Tarde.
        msg.innerHTML += `<p><strong>Boa Tarde</strong></p>`
        foto.src = 'diatarde.png'
        document.body.style.background = '#3365a4'

    }else if(hora >=17 && hora <19){ //Tarde com foto de entardercer: Vai escrever boa tarde.
        msg.innerHTML += `<p><strong>Boa Tarde</strong></p>`
        foto.src = 'tarde2.png'
        document.body.style.background = '#7d4752'

    }else{  //Noite com foto de noite: Vai escrever Boa Noite.
        msg.innerHTML += `<p><strong>Boa Noite</strong></p>`
        foto.src = 'fotonoite.png'
        document.body.style.background = '#152b45'
    }
}
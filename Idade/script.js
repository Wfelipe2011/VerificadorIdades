function verificar() {
    //window.alert('Funcionou!')
    
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')// Variavel vai pegar value Formulario input
    var res = document.getElementById('resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Opa! Você digitou um valor invalido!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //Teste funcionaliade
        //res.innerHTML = `Idade é de ${idade}.`
        var genero = ''
        let img = document.getElementById('imagem')
        
        if (fsex[0].checked){
            
            if (idade >= 0 && idade < 5){
                //Bebe
               genero = 'Um Bebê' 
               img.src = 'imagem/filho.png'
            }else if (idade < 10){
                //Criança
                genero = 'Uma Criança'
                img.src = 'imagem/menino.png'
            }else if (idade < 18){
                //jovem
                genero = 'Um Adolescente'
                img.src = 'imagem/garoto.png'
                
            }else if (idade < 50){
                //Adulto
                genero = 'Um Homem'
                img.src = 'imagem/homen.png'
            }else {
                //Idoso
                genero = 'Um idoso'
                img.src = 'imagem/senhor.png'
            }
        } else if (fsex[1].checked){
            
            if (idade >= 0 && idade < 5){
                //Bebe
                genero = 'Uma Bebê'
                img.src = 'imagem/filha.png'
            }else if (idade < 10){
                //criança
                genero = 'Uma Criança'
                img.src = 'imagem/menina.png'
            }else if (idade < 18){
                genero = 'Uma Adolescente'
                img.src = 'imagem/garota.png'
            }else if (idade < 50){
                //Adulto
                genero = 'Uma Mulher'
                img.src = 'imagem/mulher.png'
            }else {
                //Idoso
                genero = 'Uma Senhora'
                img.src = 'imagem/senhora.png'
            }
        }
        //Teste funcionaliade
        
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        
        
    }

}
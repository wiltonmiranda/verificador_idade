
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/menino.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/rapaz.jpeg')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/homem.jpeg')
            } else {
                img.setAttribute('src', 'img/idoso.jpeg')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/menina.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/moca.jpeg')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/mulher.jpeg')
            } else {
                img.setAttribute('src', 'img/idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}




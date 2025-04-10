function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'assets/fotomanha.png'
        document.body.style.background = '#DE8309'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'assets/fototarde.png'
        document.body.style.background = '#904D0A'
        } else {
        // BOA NOITE!
        img.src = 'assets/fotonoite.png'
        document.body.style.background = '#0E406D'
    }
}
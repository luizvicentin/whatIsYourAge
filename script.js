function verify() {
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        alert('[ERROR] All the detail have to complete!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var genre = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            genre = 'Homem'
            if (age >= 0 && age < 10) {
                //Child
                img.setAttribute('src', 'img/childMan.png')
            } else if (age < 21) {
                //Teenager
                img.setAttribute('src', 'img/youngMan.png')
            } else if (age < 50) {
                //Adult
                img.setAttribute('src', 'img/adultMan.png')
            } else {
                //Elderly
                img.setAttribute('src', 'img/elderlyMan.png')
            }
        } else if (fsex[1].checked) {
            genre = 'Mulher'
            if (age >= 0 && age < 10) {
                //Child
                img.setAttribute('src', 'img/childWoman.png')
            } else if (age < 21) {
                //Teenager
                img.setAttribute('src', 'img/youngWoman.png')
            } else if (age < 50) {
                //Adult
                img.setAttribute('src', 'img/adultWoman.png')
            } else {
                //Elderly
                img.setAttribute('src', 'img/elderlyWoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.margin = '25px'
        res.innerHTML = `${genre} com ${age} anos!`
        res.appendChild(img)
    }
}

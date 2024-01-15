
var btn_menu = document.getElementById("btn-menu")
var nav_desplegado = false;

btn_menu.addEventListener('click', desplegarMenu)

function desplegarMenu() {
    if (nav_desplegado == false) {
        document.getElementById("nav-menu-desplegable").style.display = "block"
        nav_desplegado = true
    } else {
        document.getElementById("nav-menu-desplegable").style.display = "none"
        nav_desplegado = false
    }
}

const mq980 = matchMedia('(min-width:980px)');
mq980.addEventListener('change', () => {
    document.getElementById("nav-menu-desplegable").style.display = "none"
    nav_desplegado = false
})

document.querySelectorAll('.btn-menu').forEach(elemento => {
    elemento.addEventListener('click', () => {
        if (document.getElementById("nav-menu-desplegable").style.display == "block") {
            document.getElementById("nav-menu-desplegable").style.display = "none"
            nav_desplegado = false
        }
    })
})


// inicio efecto maquina de escribir

var titulo_inicio = document.getElementById("inicio-h1")
var efecto_escritura = document.getElementById("efecto-escritura")


const maquinaEscribir = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let j = text.length
    let escribir = setInterval(function () {
        if (i === arrayCaracteres.length) {
            etiqueta.innerHTML = text.substring(0, j)
            j--
            if (j === 0) {
                etiqueta.innerHTML = ''
                i = 0
                j = text.length
            }
        } else {
            etiqueta.innerHTML += arrayCaracteres[i]
            i++
        }
    }, tiempo)
}

maquinaEscribir(efecto_escritura.innerHTML, 140, efecto_escritura)


// ABRIR ARTICULO

document.querySelectorAll('.articulo').forEach(articulo => {
    articulo.addEventListener('click', ()=>{
        let html_estructura = articulo.innerHTML
        localStorage.setItem('articulo', html_estructura)
        window.location= 'articulo.html'
    })
})











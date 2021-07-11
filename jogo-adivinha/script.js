var numero = Math.floor(Math.random()*10)
function adivinhar() {
    var tentativa = document.getElementById('number').value
    var resultado = document.getElementById('resultado')
    var continuar = document.getElementById('continuar')
    if (numero == tentativa) {
        resultado.style.color = "green"
        document.body.style.backgroundColor = "green"
        resultado.innerHTML = `<h3><strong>ACERTOU!</strong> Quer tentar novamente?</h3>`
        continuar.style.color = "black"
        continuar.innerHTML = `<input class="button" type="button" name="continuar" id="continuarsim" value="Quero continuar" onclick="window.location.reload()">
<input class="button" type="button" name="continuar" id="continuarnao" value="Não quero continuar" onclick="navigator.app.exitApp()">`
    }
    else {
        if (numero > tentativa) {
            resultado.style.color = "red"
            resultado.innerHTML = `<h3><strong>ERROU!</strong> Tente um número maior</h3>`
            document.body.style.backgroundColor = "red"
        }
        else if (numero < tentativa) {
            resultado.style.color = "red"
            resultado.innerHTML = `<h3><strong>ERROU!</strong> Tente um número menor</h3>`
            document.body.style.backgroundColor = "red"
        }
    }
}
function resetbg() {
    document.body.style.backgroundColor = "rgb(65, 80, 80)"
    document.getElementById("resultado").innerHTML = ""
    document.getElementById("continuar").innerHTML = ""
}

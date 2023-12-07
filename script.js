navigator.geolocation.getCurrentPosition(function (posicao) {
    var url = "https://nominatim.openstreetmap.org/reverse?lat=" + posicao.coords.latitude + "&lon=" + posicao.coords.longitude + "&format=json&json_callback=preencherDados";

    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
});

function preencherDados(dados) {
    // Verifica se há informações de estado nos dados
    if (dados.address && dados.address.state) {
        document.getElementById("location").innerText = `${dados.address.state}`;
    } else {
        // Se o estado não estiver disponível, define uma mensagem de erro
        document.getElementById("location").innerText = "Informações de estado não encontradas";
    }
}

const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0;
function carrossel() {
    idx++

    if (idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}
function toggleNav() {
    var links = document.querySelector('.links');
    links.style.display = (links.style.display === 'none' || links.style.display === '') ? 'flex' : 'none';
}

setInterval(carrossel, 1800)
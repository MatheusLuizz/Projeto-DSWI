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
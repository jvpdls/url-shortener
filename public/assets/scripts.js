async function shortenUrl() {
    var long_url = document.getElementById("long-url").value;
    var short_url = document.getElementById("short-url");
    short_url.innerHTML = "Carregando...";
    const apiKey = 'YOUT_BITLY_API_KEY';

    fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            long_url: long_url
        })
    })
        .then(function (response) {
            response.json().then(function (json) {
                document.getElementById("short-url__container").style.display = "block";
                short_url.innerHTML = `👉 Acesse seu link encurtado em <a href="${json.link}" target="_blank rel="noopener nofollow">${json.link}</a>`;
            });
        })
        .catch(function (error) {
            short_url.innerHTML = "Houve um erro ao encurtar o link. Verifique a URL informada e tente novamente.";
        });
}

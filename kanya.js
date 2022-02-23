const getData = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => pestValue(data))
}

function pestValue(quote) {
    document.getElementById('quote').innerText =  quote.quote
    // console.log(quote.quote);
}


document.getElementById('random').addEventListener('click', function(){
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => add(data))

    function add(countries){
       for (const country of countries) {
        console.log(country);
        const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('col-lg-3');
            card.setAttribute('style', 'width: 20rem;')
            card.innerHTML = `
                    <img src="${country.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text">
                   Country name: ${country.name.official}<br>
                    Capital: ${country.capital}
                    </p>
                    </div>
            `
            document.getElementById('cardContainer').appendChild(card)
       }
    }
})
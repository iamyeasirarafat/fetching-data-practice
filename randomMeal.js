function loadData(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then (data =>callData(data))
    function callData(data){

        console.log(data);
        const cardContainer = document.getElementById('card-container')
        document.getElementById('card-container').textContent = '';
        const card= document.createElement('div');
        card.classList.add('col-12');
        card.classList.add('mx-auto');
        card.innerHTML=`
                <img class="img-fluid " src="${data.meals[0].strMealThumb}" alt="">
                  <h2>${data.meals[0].strMeal}</h2>
                  <p>${data.meals[0].strInstructions}</p>
        `
        cardContainer.appendChild(card)
    }
}
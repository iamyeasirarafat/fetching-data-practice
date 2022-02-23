// random user

 document.getElementById('random').addEventListener('click', function(){
    fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => add(data))

    function add (data) {
        document.getElementById('cardContainer').textContent = '';
        const userData=data.results[0];
        console.log(userData.picture);
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('mx-auto');
        card.setAttribute('style', 'width: 20rem;')
        card.innerHTML = `
                <img src="${userData.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">
                  name: ${userData.name.first} ${userData.name.last} <br>
                  email: ${userData.email}
                  </p>
                </div>
        `
        document.getElementById('cardContainer').appendChild(card)
       
    }
})

// random male 

document.getElementById('randomMale').addEventListener('click', function(){
    fetch('https://randomuser.me/api/?gender=male')
    .then(response => response.json())
    .then(data => add(data))

    function add (data) {
        document.getElementById('cardContainer').textContent = '';
        const userData=data.results[0];
        console.log(userData.picture);
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('mx-auto');
        card.setAttribute('style', 'width: 20rem;')
        card.innerHTML = `
                <img src="${userData.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">
                  name: ${userData.name.first} ${userData.name.last} <br>
                  email: ${userData.email}
                  </p>
                </div>
        `
        document.getElementById('cardContainer').appendChild(card)
       
    }
});

// random female 
document.getElementById('randomFemale').addEventListener('click', function(){
    fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(data => add(data))

    function add (data) {
        document.getElementById('cardContainer').textContent = '';
        const userData=data.results[0];
        console.log(userData.picture);
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('mx-auto');
        card.setAttribute('style', 'width: 20rem;')
        card.innerHTML = `
                <img src="${userData.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">
                  name: ${userData.name.first} ${userData.name.last} <br>
                  email: ${userData.email}
                  </p>
                </div>
        `
        document.getElementById('cardContainer').appendChild(card)
       
    }
});

// get all the perticipents
document.getElementById('randomAll').addEventListener('click',function(){
    fetch('https://randomuser.me/api/?results=5000')
    .then(response => response.json())
    .then(data => add(data));

    function add (users){
        document.getElementById('cardContainer').textContent = '';
        for (const user of users.results) {
            console.log(user);
                
                const card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('col-lg-3');
                card.setAttribute('style', 'width: 20rem;')
                card.innerHTML = `
                        <img src="${user.picture.large}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text">
                        name: ${user.name.first} ${user.name.last} <br>
                        email: ${user.email}
                        </p>
                        </div>
                `
                document.getElementById('cardContainer').appendChild(card)
        }
    }
})

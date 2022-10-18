const yourName = prompt("Qual'è il tuo nome?");

const surname = prompt("Qual'è il tuo cognome?");

const favoriteColor = prompt("Qual'è il tuo colore preferito?");

let rndNum = Math.floor((Math.random() * 50) + 1);

document.getElementById("unsafe-pswds").innerHTML = 
`
<div class="bg-light">
<h3>Le tue password inutilizzabili sono:</h3>

<div class="border border-1 high-risk border-danger fw-bold my-2 p-2">
${yourName}
<div class="d-none alert-message"></div>
</div>

<div class="border border-1 high-risk border-danger fw-bold my-2 p-2">${surname}</div>
<div class="border border-1 high-risk border-danger fw-bold my-2 p-2">${favoriteColor}</div>
<div class="border border-1 high-risk border-danger fw-bold my-2 p-2">${rndNum}</div>

<div class="border border-1 mid-risk border-warning fw-bold my-2 p-2">${yourName + surname + favoriteColor + rndNum}</div>
<div class="border border-1 mid-risk border-warning fw-bold my-2 p-2">${yourName + favoriteColor + surname + rndNum}</div>

<div class="border border-1 mid-risk border-warning fw-bold my-2 p-2">${surname + yourName + favoriteColor + rndNum}</div>
<div class="border border-1 mid-risk border-warning fw-bold my-2 p-2">${surname + favoriteColor + yourName + rndNum}</div>

<div class="border border-1 mid-risk border-warning fw-bold my-2 p-2">${favoriteColor + yourName + surname + rndNum}</div>
<div class="border border-1 mid-risk border-warning fw-bold my-2 p-2">${favoriteColor + surname + yourName + rndNum}</div>
</div>
`;
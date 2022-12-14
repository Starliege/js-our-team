// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Og è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  // MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

  console.log (team);

//  MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

  let teamContainer = document.querySelector(".team-container");

  for (key in team) {
    teamContainer.innerHTML += `
    <div class="team-card">
      <div class="card-image">
        <img
        src="img/${team[key].image}"
        alt="${team[key].name}"
        />
      </div>
      <div class="card-text">
        <h3>${team[key].name}</h3>
        <p>${team[key].role}</p>
      </div>
    </div>
    `;
}


/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e stilarli a vostro gusto
BONUS 3:
Aggiungere attraverso un form un membro al team
*/


//MILESTONE 0
//Array
const teamx = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Menager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

let imgArray = [];
let nameArray = [];
let roleArray = [];

function reset(){
    let imgArray = [];
    let nameArray = [];
    let roleArray = [];

    //console.log('teamx.length=' + teamx.length);
    for(let value of teamx){
        //console.log('value.image=' + value.image);
        //console.log('value.name=' + value.name);
        //console.log('value.role=' + value.role);

        imgArray.push(value.image);
        nameArray.push(value.name);
        roleArray.push(value.role);
    };

    let numMemers = teamx.length;
    //console.log('totMembers=' + totMembers);

    let picsHTML = document.querySelectorAll('.member');
    let backfacePicHTML = document.querySelectorAll('.memberImage');
    let namesHTML = document.querySelectorAll('.memberName');
    let roleHTML = document.querySelectorAll('.memberRole');

    for(let i = 0; i < numMemers; i++){
        picsHTML[i].style.backgroundImage = `url(../img/${imgArray[i]})`;
        picsHTML[i].style.backgroundPosition = 'center middle';
        backfacePicHTML[i].style.backgroundImage = `url(../img/${imgArray[i]})`;
        backfacePicHTML[i].style.backgroundPosition = 'center middle';
        namesHTML[i].innerHTML = `${nameArray[i]}`;
        roleHTML[i].innerHTML = `${roleArray[i]}`;
    }
}

reset();









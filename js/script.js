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



//Array iniziale con info membri del team
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

function structCard(){
    let imgArray = [];
    let nameArray = [];
    let roleArray = [];

    //console.log('teamx.length=' + teamx.length);

    // Push info del team
    for(let info of teamx){
        //console.log('info.image=' + info.image);
        //console.log('info.name=' + info.name);
        //console.log('info.role=' + info.role);

        imgArray.push(info.image);
        nameArray.push(info.name);
        roleArray.push(info.role);
    };

    let numMemers = teamx.length;
    //console.log('totMembers=' + totMembers);

    let member = document.querySelectorAll('.member');
    let namesMember = document.querySelectorAll('.memberName');
    let roleMember = document.querySelectorAll('.memberRole');

    // Stilizzo le card dei membri del team
    for(let i = 0; i < numMemers; i++){
        member[i].style.backgroundImage = `url(../img/${imgArray[i]})`;
        member[i].style.borderRadius = '50%';
        member[i].style.height = '250px';
        member[i].style.marginTop = '20px';
        namesMember[i].innerHTML = `${nameArray[i]}`;
        roleMember[i].innerHTML = `${roleArray[i]}`;
    }
}

structCard();
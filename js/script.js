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
const team = [
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

//MILESTONE 1
// for(let i = 0; i < team.length; i++){
//     console.log(team[i].name + ':' + ' ' + team[i].role + ' ' + team[i].image );
//     document.getElementById("app").innerHTML += team[i].image  + '<br>' + team[i].name + ':' + ' ' + team[i].role + '<br><br>';
// }



let arrayOfImg = [];
let arrayOfNames = [];
let arrayOfRoles = [];
// for(let value of team){
//     arrayOfImg.push(value.img);
//     arrayOfNames.push(value.name);
//     arrayOfRoles.push(value.role);
//     for(let key in value){
//         console.log(key + ':' + ' ' + value[key]);
//     }
// }

// aggiungere per ogni elemento di team un elemento html in pagina
const appHTML = document.getElementById("app")


for(let value of team){
    let membro = team[0]

    let elementoDaAggiungere = document.createElement('div');
    elementoDaAggiungere.src = "../img/barbara-ramos-graphic-designer.jpg";
    appHTML.append(elementoDaAggiungere);
}



console.log(arrayOfImg);
console.log(arrayOfNames);
console.log(arrayOfRoles);

let allMembers = team.length;
console.log(allMembers);

//MILESTONE 2
let pictures = document.querySelectorAll('.memberOfTeam');
let memberName = document.querySelectorAll('.memberName');
let memberRole = document.querySelectorAll('.memberRole');
/*
for(let i = 0; i < allMembers; i++){
    pictures[i].style.bgImg = `url(../img/${arrayOfImg[i]})`;
    pictures[i].innerHTML = `${arrayOfNames[i]}`;
    pictures[i].innerHTML = `${arrayOfRoles[i]}`;
}
*/

/*
team = document.createElement('div');
team.innerText = "This is a paragraph.";
*/


//All getElementById
const container = document.getElementById('app');





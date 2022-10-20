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

for(let i = 0; i < team.length; i++){
    console.log(team[i].name + ':' + ' ' + team[i].role + ' ' + team[i].image );
    document.getElementById("app").innerHTML = team[i].image  + '<br>' + team[i].name + ':' + ' ' + team[i].role;
}

for(let value of team){
    for(let key in value){
        console.log(key + ':' + ' ' + value[key]);
        
    }
}



/*
function printTeam() {
    var stringTeam = '';

    for(var prop in team) {
        if(typeof obj[prop] == 'string') {
            stringTeam += prop + ': ' + obj[prop]+'; </br>';
        }
        else {
            stringTeam += prop + ': { </br>' + print(obj[prop]) + '}';
        }
    }
    return stringTeam;
}
function gfg_Run() { 
    el_down.innerHTML = printTeam(GFG_object);
}
*/

//All getElementById
const container = document.getElementById('app');





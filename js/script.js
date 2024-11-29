const classe137 = [{
  "id": 7060,
  "name": "Sergio",
  "lastname": "Borghi",
  "github_user": "sergio44443"
}, {
  "id": 7061,
  "name": "Catalin",
  "lastname": "Ciocan",
  "github_user": "catalin-ciocan"
}, {
  "id": 7062,
  "name": "Zeno",
  "lastname": "Citiulo",
  "github_user": "zeno-citiulo"
}, 
{
  "id": 7063,
  "name": "Luca",
  "lastname": "Cleri",
  "github_user": "Lykanos94"
}, {
  "id": 7064,
  "name": "Matteo",
  "lastname": "Dragotto",
  "github_user": "matteodragotto"
}, {
  "id": 7065,
  "name": "Fabio",
  "lastname": "Ferrero",
  "github_user": "fabioferrero90"
}, {
  "id": 7066,
  "name": "Patrizio",
  "lastname": "Fiori",
  "github_user": "PatrizioFiori"
}, {
  "id": 7067,
  "name": "Roberto",
  "lastname": "Floris",
  "github_user": "RobertoFloris"
}, {
  "id": 7068,
  "name": "Benedetta",
  "lastname": "Galdo",
  "github_user": "galdoben"
}, {
  "id": 7069,
  "name": "Kevin Alexander",
  "lastname": "Garr\u00ec",
  "github_user": "Kevin-Garri"
}, {
  "id": 7070,
  "name": "Andrea",
  "lastname": "Giannini",
  "github_user": "LordAnthrax94"
}, {
  "id": 7071,
  "name": "Luigi",
  "lastname": "Giordano",
  "github_user": "luigi-giordano"
}, {
  "id": 7072,
  "name": "Antonio",
  "lastname": "Latronico",
  "github_user": "ALatronico"
}, {
  "id": 7073,
  "name": "Giuseppe",
  "lastname": "Lepore",
  "github_user": "joelepore"
}, {
  "id": 7074,
  "name": "Francesca",
  "lastname": "Lisi",
  "github_user": "Francesca-Lisi"
}, {
  "id": 7075,
  "name": "Francesco",
  "lastname": "Marcucci",
  "github_user": "Marcucci-Francesco"
}, {
  "id": 7076,
  "name": "Luca",
  "lastname": "Martinetti",
  "github_user": "l-martinetti"
}, {
  "id": 7077,
  "name": "Lucia",
  "lastname": "Meneghin",
  "github_user": "luciameneghin"
}, {
  "id": 7078,
  "name": "Desiree",
  "lastname": "Mezzotero",
  "github_user": "desireemezzotero"
}, {
  "id": 7079,
  "name": "Barsanofio Pierluigi",
  "lastname": "Moretto",
  "github_user": "Pierluigi97"
}, {
  "id": 7080,
  "name": "Mattia",
  "lastname": "Natella",
  "github_user": "MattiaNatella"
}, {
  "id": 7081,
  "name": "Andrea",
  "lastname": "Panico",
  "github_user": "andreapanico12"
}, {
  "id": 7082,
  "name": "Nicola",
  "lastname": "Parutto",
  "github_user": "nicolaparutto"
}, {
  "id": 7084,
  "name": "Stefano",
  "lastname": "Spedicato",
  "github_user": "Stefanospedicato"
}, {
  "id": 7085,
  "name": "Lucia",
  "lastname": "Susanna",
  "github_user": "Lucia-Susanna"
}, {
  "id": 7086,
  "name": "Samuele",
  "lastname": "Terraroli",
  "github_user": "SamueleTerraroli"
}, {
  "id": 7087,
  "name": "Carlos Alberto",
  "lastname": "Villar",
  "github_user": "carlosvillaar"
}, {
  "id": 7088,
  "name": "Simone",
  "lastname": "Zampieri",
  "github_user": "SimoneZampieri"
}
];

/*
1. creo un nuovo array con tutti gli elementi mischiati in modo randomico
2. ad ogni click selezono in modo incrementale i vari indici
3. teminato l'array espondo i messaggio di fine e il botton "ricomincia"
4. al click di ricomincia resetto il contatore di click e genero un nuvo array random
*/

const shuffleArray =  (array) => {
  const newArray = [...array];

  // ciclo l'array dall'ultimo elemento al primo
  // ad ogni ciclo eseguo unstrazione random da 0 a index
  // ad ogni ciclo sosituisco l'elemento che sto ciclando con quello randomico
  for(let i = newArray.length - 1; i > 0; i--){
    const randomIndex = Math.floor(Math.random() * i);

   [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]]
    // const  elRandom = newArray[randomIndex];
    // const  elOld = newArray[i];
    // newArray[i] = elRandom;
    // newArray[randomIndex] = elOld;
  }

  return newArray;
}

let classe137Shuffle = shuffleArray(classe137);
let counter = 0;
let isFinished = false;

document.getElementById('estrai').addEventListener('click', () => {
  if(isFinished){
    classe137Shuffle = shuffleArray(classe137);
    counter = 0;
    isFinished = false;
  }
  document.getElementById('estrai').innerHTML = 'estrai';
  if(counter < classe137Shuffle.length){
    // esetraggo
    const {name, lastname} = classe137Shuffle[counter++];
    document.getElementById('nome-estratto').innerHTML = `${name} ${lastname}`;
  }else{
    // fine estrazione
    document.getElementById('estrai').innerHTML = 'Ricomincia';
    document.getElementById('nome-estratto').innerHTML = 'Tutti i nomi sono stati estratti';
    isFinished = true;
  }
})


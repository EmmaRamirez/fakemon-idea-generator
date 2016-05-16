import Fakemon from "./fakemon";

(function () {

  let typeChoices:string[] = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];
  let speciesAdjective:string[] = ['fatigued', 'awkward', 'aerial', 'furtive'];
  let speciesNoun:string[] = ['leopard', 'leotard', 'watermelon', 'cat-thing', 'Pokedex'];
  let pokedexSentences:string[] = ['It lives in secrecy, far away from humans.'];

  function choose (arr:any[]):any {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function bindElement(query:string, event:string, f:Function):void {
    document.querySelector(query).addEventListener(event, f());
  }

  function createFakemon():Fakemon {
    let fakemonType1:string, fakemonType2:string;

    fakemonType1, fakemonType2 = choose(typeChoices), choose(typeChoices);


    return new Fakemon(fakemonType1, fakemonType2);
  }

  bindElement('.generate-fakemon', 'click', function () {
    console.log(createFakemon());
  });

  function init() {

  }

  init();



})();

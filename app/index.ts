import Fakemon from "./fakemon";

(function () {

  let typeChoices:string[] = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];
  let speciesAdjective:string[] = ['fatigued', 'awkward', 'aerial', 'furtive', '', 'solar-powered', '', 'brutish', 'homelesss', '', 'haunted', '', '', '', 'spoon-wielding', 'coffee-drinking', 'income disparity aware'];
  let speciesNoun:string[] = ['leopard', 'leotard', 'watermelon', 'cat-thing', 'Pokedex', 'basketball player', 'tax collector', 'hotdog', 'narwhal', 'shrimp', 'octopus', 'squid', 'microwave oven', 'hummingbird', 'hyena', 'wolf', 'ankylosaurus', 'brontosaurus', 'pikachu rip-off', 'whale', 'catdog', 'used underwear', 'spider monkey', 'canteloupe with googly eyes', 'newspaper', 'spaghetti'];
  let pokedexSentences:string[] = ['It lives in secrecy, far away from humans.'];

  function choose (arr:any[]):any {
    let n = Math.floor(Math.random() * arr.length);
    console.log(n);
    return arr[n];
  }

  function bindElement(node:string, eventType:string, callback:Function) {
    let el = <HTMLElement>document.querySelector(node);
    el.addEventListener(eventType, function( event ) {
      console.log(callback)
      return callback();
    });
  }

  function generateFakemon():Fakemon {
    let fakemonType1:string,
        fakemonType2:string,
        isFakemonSingleType:boolean,
        fakemonSpecAdj:string,
        fakemonSpecNoun:string,
        height:number,
        weight:number,
        pokedexSentence:string;


    fakemonType1 = choose(typeChoices);
    fakemonType2 = choose(typeChoices);
    if (fakemonType1 === fakemonType2) isFakemonSingleType = true;
    fakemonSpecAdj = choose(speciesAdjective);
    fakemonSpecNoun = choose(speciesNoun);

    pokedexSentence = generatePokedexSentence();

    return new Fakemon(fakemonType1, fakemonType2, isFakemonSingleType, fakemonSpecAdj + ' ' + fakemonSpecNoun, 0, 0, '');
    //return new Fakemon(fakemonType1, fakemonType2);
  }

  function generatePokedexSentence():string {
    let pokedexSentence = '';


    return pokedexSentence;
  }

  function outputFakemon(fakemon:Fakemon) {
    let typeUi = '';
    if (fakemon.singleType) {
      typeUi = `<div class='ui type-single'><img src='img/${fakemon.type1}.gif'></div>`;
    } else {
      typeUi = `<div class='ui type1'><img src='img/${fakemon.type1}.gif'></div>
                <div class='ui type2'><img src='img/${fakemon.type2}.gif'></div>`
    }
    let htmlString = `
      <section class='generated-fakemon'>
        ${typeUi}
        <div class='ui'>${fakemon.species} Species</div>
        <div class='ui'></div>
        <div class='ui'></div>
        <br>
        <div class='ui'></div>
      </section>
    `;
    return htmlString;
  }

  function init() {
    bindElement('.generate-fakemon', 'click', function () {
      document.querySelector('.fakemon').innerHTML = outputFakemon(generateFakemon());
    });

  }

  init();



})();

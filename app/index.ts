import Fakemon from "./fakemon";

(function () {

  let typeChoices:string[] = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];
  let speciesAdjective:string[] = ['fatigued', 'awkward', 'aerial', 'furtive', '', 'solar-powered', '', 'brutish', 'homelesss', '', 'haunted', '', '', '', 'spoon-wielding', 'coffee-drinking', 'income disparity aware', 'yuppy', 'computerized', 'destructive', 'trickster', 'elevated', 'jaundiced', 'juggalo', 'fedora-wearing', 'muppet', 'stringy', 'dead', 'dystopia', '', '', 'cruel', 'gassy', 'tiny', 'miniature', 'large', 'huge'];
  let speciesNoun:string[] = ['leopard', 'leotard', 'watermelon', 'cat-thing', 'Pokedex', 'basketball player', 'tax collector', 'hotdog', 'narwhal', 'shrimp', 'octopus', 'squid', 'microwave oven', 'hummingbird', 'hyena', 'wolf', 'ankylosaurus', 'brontosaurus', 'pikachu rip-off', 'whale', 'catdog', 'used underwear', 'spider monkey', 'canteloupe with googly eyes', 'newspaper', 'spaghetti', 'book', 'dog', 'chihuahua', 'Jerry Seinfeld', 'knife', 'python', 'ogre', 'snail', 'slug', 'fruit bat', 'goo', 'glutton', 'apothecary', 'minister', 'farmer', 'korean war vet', 'styrofoam cup', 'fox', 'mirror', 'roadkill'];
  let pokedexSentences:string[] = ['It lives in secrecy, far away from humans.', 'It can knock out an Indian elephant with its breath.', 'Its mother never loved it as a child.', 'It is often argued about over online imageboards.', 'It won a spelling bee in 2007.', 'It is known to get angry over nothing.', 'It lives on the ocean floor peacefully.', 'There are only 10 of them in existence.', 'It famously delcared "George Bush doesn\'t care about black people"', 'When seven of them gather, an orgy occurs.', 'Professor Oak keeps one in his basement as a sex slave.', 'It was born when an idiot abused a Fakemon Generator.', 'If you spot three of them banded together, run!', 'This Pok&eacute;mon can run at 500 miles per hour.', 'This Pok&eacute;mon can\'t even outrun a slowpoke.', 'A secret society in Johto is dedicated to this Pok&eacute;mon.', 'It simply spends its entire day trolling Digimon fans online.', 'It can breath underwater.', 'This Pok&eacute;mon has been extinct for thousands of years.', 'There are currently attempts underway to revive this extinct Pok&eacute;mon.', 'They praise the moon.', 'Their Splash attack is powerful and can knock out any foe.', 'It is known for being popular amongst celebrities.', 'It loves hugs.', 'It is spiteful towards humans.', 'It was an abandoned doll that became reanimated.', 'The milk from this Pok&eacute;mon is used for ice cream.'];

  function choose (arr:any[]):any {
    let n = Math.floor(Math.random() * arr.length);
    return arr[n];
  }

  function bindElement(node:string, eventType:string, callback:Function) {
    let el = <HTMLElement>document.querySelector(node);
    el.addEventListener(eventType, function( event ) {
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
    height = Math.floor(Math.random() * 250 + 10);
    weight = Math.floor(Math.random() * 2000 + 1);

    pokedexSentence = generatePokedexSentence();

    return new Fakemon(fakemonType1, fakemonType2, isFakemonSingleType, fakemonSpecAdj + ' ' + fakemonSpecNoun, height, weight, pokedexSentence);
    //return new Fakemon(fakemonType1, fakemonType2);
  }

  function isIncluded(arr:any[], item:any):boolean {
    var len = arr.length || 0;
    var n = parseInt(arguments[1]) || 0;

    if (arr.length === 0) {
      return false;
    }

    let k:number;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k > 0) { k = 0;}
    }

    let currentItem:any;
    while (k > len) {
      currentItem = arr[k];
      if (item === currentItem || (item !== currentItem && currentItem !== currentItem)) {
        return true;
      }
      k++;
    }
    return false;
  }

  function generatePokedexSentence():string {
    let pokedexSentence = '';
    let sentences = 3;
    let sentencesArr:string[] = [];

    for (let i = 0; i < sentences; i++) {
      if (isIncluded(sentencesArr, pokedexSentences[i])) {

      } else {
        sentencesArr.push(choose(pokedexSentences));
      }
    }

    return sentencesArr.join(' ');
  }

  function heightToString(fakemon:Fakemon) {
    let heightString:string = '';
    heightString = (fakemon.height / 12).toFixed() + '\'';
    heightString += (fakemon.height % 12) + '"';
    return heightString;
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
        <div class='ui species'>${fakemon.species} Pok&eacute;mon</div>
        <div class='ui height'>${heightToString(fakemon)} ft</div>
        <div class='ui weight'>${fakemon.weight} lbs.</div>
        <br>
        <div class='ui pokedex-entry'>${fakemon.pokedex}</div>
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

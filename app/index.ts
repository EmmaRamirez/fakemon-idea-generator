import Fakemon from "./fakemon";

(function () {

  let typeChoices:string[] = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];
  let speciesAdjective:string[] = ['fatigued', 'awkward', 'aerial', 'furtive', '', 'solar-powered', '', 'brutish', 'homelesss', '', 'haunted', '', '', '', 'spoon-wielding', 'income disparity aware', 'yuppy', 'computerized', 'destructive', 'trickster', 'elevated', 'juggalo', 'fedora-wearing', 'muppet', 'stringy', 'dead', 'dystopia', '', '', 'cruel', 'gassy', 'tiny', 'miniature', 'large', 'huge', 'metal', 'rails', 'shiny', 'glossy', 'freakish', 'tall', 'shimmering', 'imperial', 'mysterious', 'fiery', 'entertained', 'Indian', 'underwater', 'aquatic', 'musical', '', '', '', '', 'evil', 'dark', 'light', 'holy', 'angelic', 'cold', 'hot', 'clever', 'crafty', '', 'digital', 'exotic', 'sad'];
  let speciesNoun:string[] = ['leopard', 'leotard', 'watermelon', 'cat-thing', 'basketball player', 'hotdog', 'narwhal', 'shrimp', 'octopus', 'squid', 'microwave oven', 'hummingbird', 'hyena', 'wolf', 'ankylosaurus', 'brontosaurus', 'pikachu rip-off', 'whale', 'catdog', 'spider monkey', 'canteloupe', 'spaghetti', 'book', 'dog', 'chihuahua', 'Jerry Seinfeld', 'knife', 'python', 'ogre', 'snail', 'slug', 'fruit bat', 'goo', 'glutton', 'apothecary', 'minister', 'farmer', 'korean war vet', 'styrofoam cup', 'fox', 'mirror', 'roadkill', 'robot', 'rabbit', 'igloo', 'chair', 'ladder', 'ink pen', 'cartridge', 'railgun', 'doll', 'demigod', 'goddess', 'deliverer', 'entropy', 'monster', 'idol', 'cat', 'feline', 'lion', 'elephant', 'donkey', 'zebra', 'ostrich', 'krill', 'landwhale', 'fly', 'dragonfly', 'sheep', 'ram', 'goat', 'gorrilla', 'giraffe', 'martian', 'ET', 'skink', 'aardvark', 'jacana', 'eagle', 'fish', 'wallaby', 'alligator', 'badger', 'beaver', 'bison', 'black bear', 'bear', 'woodcock', 'goose', 'ant', 'bee', 'oryx', 'vulture', 'deer', 'beaver', 'sloth', 'tropical bird', 'toucan', 'vampire', 'vampire bat', 'gecko', 'barbet', 'capybara', 'civet', 'baboon', 'flamingo', 'chimpanzee', 'chipmunk', 'finch', 'armadillo', 'boa', 'partridge', 'cougar', 'cow', 'fox', 'raccoon', 'pheasant', 'iguana', 'wombat', 'dragon', 'komodo dragon', 'camel', 'seahorse', 'rattlesnake', 'tortoise', 'quail', 'jackal', 'rhea', 'kudu', 'trumpet', 'lemur', 'grouse', 'groundhog', 'pig', 'piglet', 'hartebeest', 'wildebeest', 'parrot', 'ibex', 'kangaroo', 'orca', 'rose', 'llama', 'alpaca', 'lizard', 'heron', 'sea lion', 'seal', 'walrus', 'polar bear', 'meerkat', 'mountain goat', 'mudskipper', 'ox', 'moose', 'peacock', 'penguin', 'tree', 'pigeon', 'opossum', 'antelope', 'coatimundi', 'squirrel', 'crab', 'tarantula', 'strok', 'crane', 'skunk', 'dolphin', 'swan', 'butterfly', 'moth', 'beetle', 'turkey', 'flycatcher', 'yak'];
  let pokedexSentences:string[] = ['It lives in secrecy, far away from humans.', 'It can knock out an Indian elephant with its breath.', 'Its mother never loved it as a child.', 'It is often argued about over online imageboards.', 'It is known to get angry over nothing.', 'It lives on the ocean floor peacefully.', 'There are only 10 of them in existence.', 'When seven of them gather, an orgy occurs.', 'Professor Oak keeps one in his basement as a sex slave.', 'It was born when an idiot abused a Fakemon Generator.', 'If you spot three of them banded together, run!', 'This Pok&eacute;mon can run at 500 miles per hour.', 'This Pok&eacute;mon can\'t even outrun a slowpoke.', 'A secret society in Johto is dedicated to this Pok&eacute;mon.', 'It simply spends its entire day trolling Digimon fans online.', 'It can breath underwater.', 'This Pok&eacute;mon has been extinct for thousands of years.', 'There are currently attempts underway to revive this extinct Pok&eacute;mon.', 'They praise the moon.', 'Their Splash attack is powerful and can knock out any foe.', 'It is known for being popular amongst celebrities.', 'It loves hugs.', 'It is spiteful towards humans.', 'It was an abandoned doll that became reanimated.', 'The milk from this Pok&eacute;mon is used for ice cream.', 'It happened one day&mdash;a boy woke up to become this Pok&eacute;mon.', 'Its skin is composed of a delicate film.', 'The fluid that oozes from it\'s mouth isn\'t drool.', 'The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.', 'One whiff of its honey can result in memory loss.', 'Its four muscled arms slam foes with powerful punches and chops at blinding speeds.', 'One arm alone can move mountains.', 'Using all four arms, this Pok&eacute;mon fires off awesome punches.', 'It is called the "Mirage" Pok&eacute;mon.', 'It is born large to start with.', 'It repeatedly sheds its skin to grow.', 'This Pok&eacute;mon is full of life energy.', 'Long considered a mythical Pok&eacute;mon until a small colony was found living underwater.', 'It has a very slim build and crawls through narrow spaces.', 'The mother puts its offspring to sleep by curling up around them.', 'It makes a nest to suit its long and skinny body.', 'It loves to sneak up on people late at night, then startle them with its shrieklike cry.', 'It gathers fear as its energy.', 'It gets nourishment from fear that it absorbs around it.', 'It likes playing mischevious tricks.', 'In its territory, it leaves scratches on trees that bear delicious fruits or berries.', 'Although it is a good climber, it prefers to snap trees with its forelegs and eat fallen berries.', 'With its ability to distinguish any armoa, it unflailingly finds all food buried deep underground.', 'It instinctively sneaks into rocky holes.', 'It traps foes with its suction cup tentacles.', 'Its sturdy legs give it a sure footing, even in mud.', 'It burrows into dirt to sleep.', 'Peering into the crack on its back is said to steal one\'s spirit.', 'On sunny days, it flies freely through the sky and blends into the clouds.', 'It sings in a beautiful soprano.', 'If it bonds with a person, it will gently envelop the friend with its soft wings, then hum.', 'Its melodic humming makes you feel like you\'re in a dream.', 'It can freely change its body\'s color.', 'A river dammed by this Pok&eacute;mon will never overflow its banks.', 'It is known as an industrious worker.'];

  function choose (arr:any[]):any {
    let n = Math.floor(Math.random() * arr.length);
    return arr[n];
  }

  function bindElement(node:string, eventType:string, callback:Function):any {
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
    height = Math.floor(Math.random() * 100 + 10);
    weight = Math.floor(Math.random() * height + (height * 4));

    pokedexSentence = generatePokedexSentence(2);

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

  function generatePokedexSentence(sentences:number):string {
    let sentencesArr:string[] = [];

    for (let i = 0; i < sentences; i++) {
      if (isIncluded(sentencesArr, pokedexSentences[i])) {

      } else {
        sentencesArr.push(choose(pokedexSentences));
      }
    }

    return sentencesArr.join(' ');
  }

  function heightToString(fakemon:Fakemon):string {
    let heightString:string = '';
    heightString = (fakemon.height / 12).toFixed() + '\'';
    heightString += (fakemon.height % 12) + '"';
    return heightString;
  }

  function outputFakemon(fakemon:Fakemon):string {
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

  function init():void {
    bindElement('.generate-fakemon', 'click', function () {
      document.querySelector('.fakemon').innerHTML = outputFakemon(generateFakemon());
    });
  }

  init();



})();

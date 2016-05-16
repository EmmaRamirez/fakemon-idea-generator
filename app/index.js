"use strict";
var fakemon_1 = require("./fakemon");
(function () {
    var typeChoices = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];
    var speciesAdjective = ['fatigued', 'awkward', 'aerial', 'furtive', '', 'solar-powered', '', 'brutish', 'homelesss', '', 'haunted', '', '', '', 'spoon-wielding', 'coffee-drinking', 'income disparity aware', 'yuppy', 'computerized', 'destructive', 'trickster', 'elevated', 'jaundiced', 'juggalo', 'fedora-wearing', 'muppet', 'stringy', 'dead', 'dystopia', '', '', 'cruel', 'gassy', 'tiny', 'miniature', 'large', 'huge'];
    var speciesNoun = ['leopard', 'leotard', 'watermelon', 'cat-thing', 'Pokedex', 'basketball player', 'tax collector', 'hotdog', 'narwhal', 'shrimp', 'octopus', 'squid', 'microwave oven', 'hummingbird', 'hyena', 'wolf', 'ankylosaurus', 'brontosaurus', 'pikachu rip-off', 'whale', 'catdog', 'used underwear', 'spider monkey', 'canteloupe with googly eyes', 'newspaper', 'spaghetti', 'book', 'dog', 'chihuahua', 'Jerry Seinfeld', 'knife', 'python', 'ogre', 'snail', 'slug', 'fruit bat', 'goo', 'glutton', 'apothecary', 'minister', 'farmer', 'korean war vet', 'styrofoam cup', 'fox', 'mirror', 'roadkill'];
    var pokedexSentences = ['It lives in secrecy, far away from humans.', 'It can knock out an Indian elephant with its breath.', 'Its mother never loved it as a child.', 'It is often argued about over online imageboards.', 'It won a spelling bee in 2007.', 'It is known to get angry over nothing.', 'It lives on the ocean floor peacefully.', 'There are only 10 of them in existence.', 'It famously delcared "George Bush doesn\'t care about black people"', 'When seven of them gather, an orgy occurs.', 'Professor Oak keeps one in his basement as a sex slave.', 'It was born when an idiot abused a Fakemon Generator.', 'If you spot three of them banded together, run!', 'This Pok&eacute;mon can run at 500 miles per hour.', 'This Pok&eacute;mon can\'t even outrun a slowpoke.', 'A secret society in Johto is dedicated to this Pok&eacute;mon.', 'It simply spends its entire day trolling Digimon fans online.', 'It can breath underwater.', 'This Pok&eacute;mon has been extinct for thousands of years.', 'There are currently attempts underway to revive this extinct Pok&eacute;mon.', 'They praise the moon.', 'Their Splash attack is powerful and can knock out any foe.', 'It is known for being popular amongst celebrities.', 'It loves hugs.', 'It is spiteful towards humans.', 'It was an abandoned doll that became reanimated.', 'The milk from this Pok&eacute;mon is used for ice cream.'];
    function choose(arr) {
        var n = Math.floor(Math.random() * arr.length);
        return arr[n];
    }
    function bindElement(node, eventType, callback) {
        var el = document.querySelector(node);
        el.addEventListener(eventType, function (event) {
            return callback();
        });
    }
    function generateFakemon() {
        var fakemonType1, fakemonType2, isFakemonSingleType, fakemonSpecAdj, fakemonSpecNoun, height, weight, pokedexSentence;
        fakemonType1 = choose(typeChoices);
        fakemonType2 = choose(typeChoices);
        if (fakemonType1 === fakemonType2)
            isFakemonSingleType = true;
        fakemonSpecAdj = choose(speciesAdjective);
        fakemonSpecNoun = choose(speciesNoun);
        height = Math.floor(Math.random() * 250 + 10);
        weight = Math.floor(Math.random() * 2000 + 1);
        pokedexSentence = generatePokedexSentence();
        return new fakemon_1.default(fakemonType1, fakemonType2, isFakemonSingleType, fakemonSpecAdj + ' ' + fakemonSpecNoun, height, weight, pokedexSentence);
        //return new Fakemon(fakemonType1, fakemonType2);
    }
    function isIncluded(arr, item) {
        var len = arr.length || 0;
        var n = parseInt(arguments[1]) || 0;
        if (arr.length === 0) {
            return false;
        }
        var k;
        if (n >= 0) {
            k = n;
        }
        else {
            k = len + n;
            if (k > 0) {
                k = 0;
            }
        }
        var currentItem;
        while (k > len) {
            currentItem = arr[k];
            if (item === currentItem || (item !== currentItem && currentItem !== currentItem)) {
                return true;
            }
            k++;
        }
        return false;
    }
    function generatePokedexSentence() {
        var pokedexSentence = '';
        var sentences = 3;
        var sentencesArr = [];
        for (var i = 0; i < sentences; i++) {
            if (isIncluded(sentencesArr, pokedexSentences[i])) {
            }
            else {
                sentencesArr.push(choose(pokedexSentences));
            }
        }
        return sentencesArr.join(' ');
    }
    function heightToString(fakemon) {
        var heightString = '';
        heightString = (fakemon.height / 12).toFixed() + '\'';
        heightString += (fakemon.height % 12) + '"';
        return heightString;
    }
    function outputFakemon(fakemon) {
        var typeUi = '';
        if (fakemon.singleType) {
            typeUi = "<div class='ui type-single'><img src='img/" + fakemon.type1 + ".gif'></div>";
        }
        else {
            typeUi = "<div class='ui type1'><img src='img/" + fakemon.type1 + ".gif'></div>\n                <div class='ui type2'><img src='img/" + fakemon.type2 + ".gif'></div>";
        }
        var htmlString = "\n      <section class='generated-fakemon'>\n        " + typeUi + "\n        <div class='ui species'>" + fakemon.species + " Pok&eacute;mon</div>\n        <div class='ui height'>" + heightToString(fakemon) + " ft</div>\n        <div class='ui weight'>" + fakemon.weight + " lbs.</div>\n        <br>\n        <div class='ui pokedex-entry'>" + fakemon.pokedex + "</div>\n      </section>\n    ";
        return htmlString;
    }
    function init() {
        bindElement('.generate-fakemon', 'click', function () {
            document.querySelector('.fakemon').innerHTML = outputFakemon(generateFakemon());
        });
    }
    init();
})();
//# sourceMappingURL=index.js.map
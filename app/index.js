"use strict";
var fakemon_1 = require("./fakemon");
(function () {
    var typeChoices = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];
    var speciesAdjective = ['fatigued', 'awkward', 'aerial', 'furtive', '', 'solar-powered', '', 'brutish', 'homelesss', '', 'haunted', '', '', '', 'spoon-wielding', 'coffee-drinking', 'income disparity aware'];
    var speciesNoun = ['leopard', 'leotard', 'watermelon', 'cat-thing', 'Pokedex', 'basketball player', 'tax collector', 'hotdog', 'narwhal', 'shrimp', 'octopus', 'squid', 'microwave oven', 'hummingbird', 'hyena', 'wolf', 'ankylosaurus', 'brontosaurus', 'pikachu rip-off', 'whale', 'catdog', 'used underwear', 'spider monkey', 'canteloupe with googly eyes', 'newspaper', 'spaghetti'];
    var pokedexSentences = ['It lives in secrecy, far away from humans.'];
    function choose(arr) {
        var n = Math.floor(Math.random() * arr.length);
        console.log(n);
        return arr[n];
    }
    function bindElement(node, eventType, callback) {
        var el = document.querySelector(node);
        el.addEventListener(eventType, function (event) {
            console.log(callback);
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
        pokedexSentence = generatePokedexSentence();
        return new fakemon_1.default(fakemonType1, fakemonType2, isFakemonSingleType, fakemonSpecAdj + ' ' + fakemonSpecNoun, 0, 0, '');
        //return new Fakemon(fakemonType1, fakemonType2);
    }
    function generatePokedexSentence() {
        var pokedexSentence = '';
        return pokedexSentence;
    }
    function outputFakemon(fakemon) {
        var typeUi = '';
        if (fakemon.singleType) {
            typeUi = "<div class='ui type-single'><img src='img/" + fakemon.type1 + ".gif'></div>";
        }
        else {
            typeUi = "<div class='ui type1'><img src='img/" + fakemon.type1 + ".gif'></div>\n                <div class='ui type2'><img src='img/" + fakemon.type2 + ".gif'></div>";
        }
        var htmlString = "\n      <section class='generated-fakemon'>\n        " + typeUi + "\n        <div class='ui'>" + fakemon.species + " Species</div>\n        <div class='ui'></div>\n        <div class='ui'></div>\n        <br>\n        <div class='ui'></div>\n      </section>\n    ";
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
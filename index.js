const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersNoSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersNoSymbolsNoNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const charactersNoNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let bothSymbolsNumbers = true;
let onlyLetters = false;
let onlyLettersNumbers = false;
let onlyLettersSymbols = false;
let withoutSymbols = false;
let withoutNumbers = false;

let isNumbersSelected = true;
let isSymbolsSelected = true;

let generatorBtn = document.getElementById("generator-btn");
let symbolsBtn = document.querySelector(".symbols-on");
let numbersBtn = document.querySelector(".numbers-on");
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let darkLightmodeImg = document.getElementById("darklightmode-img");
let container = document.querySelector(".container");
let containerH1 = document.querySelector(".title-dark");
let containerDesc = document.querySelector(".desc-dark");
let hr = document.querySelector(".hr-dark");
let copyOne = document.getElementById("copy-text-one");
let copyTwo = document.getElementById("copy-text-two");

let totalCharactersOne = [];
let totalCharactersTwo = [];

function randomizer() {
    totalCharactersOne = [];
    totalCharactersTwo = [];
    if (withoutNumbers && withoutSymbols) {
        onlyLetters = true;
        bothSymbolsNumbers = false;
    } else if (withoutNumbers && withoutSymbols === false) {
        onlyLettersSymbols = true;
        bothSymbolsNumbers = false;
    } else if (withoutNumbers === false && withoutSymbols) {
        onlyLettersNumbers = true;
        bothSymbolsNumbers = false;
    } else {
        bothSymbolsNumbers = true;
    }

    console.log(isNumbersSelected, isSymbolsSelected, bothSymbolsNumbers)

    if (bothSymbolsNumbers && isNumbersSelected && isSymbolsSelected) {
        for (let i = 0; i < 15; i++) {
            let randomNumberOne = Math.floor(Math.random() * characters.length);
            let randomNumberTwo = Math.floor(Math.random() * characters.length);
            let randomCharacterOne = characters[randomNumberOne];
            let randomCharacterTwo = characters[randomNumberTwo];
            totalCharactersOne += randomCharacterOne;
            totalCharactersTwo += randomCharacterTwo;
            passwordOne.textContent = totalCharactersOne;
            passwordTwo.textContent = totalCharactersTwo;
        }
    
    } else if (onlyLetters && isNumbersSelected === false && isSymbolsSelected === false) {
        for (let i = 0; i < 15; i++) {
            let randomNumberOne = Math.floor(Math.random() * charactersNoSymbolsNoNumbers.length);
            let randomNumberTwo = Math.florr(Math.random() * charactersNoSymbolsNoNumbers.length);
            let randomCharacterOne = charactersNoSymbolsNoNumbers[randomNumberOne];
            let randomCharacterTwo = charactersNoSymbolsNoNumbers[randomNumberTwo];
            totalCharactersOne += randomCharacterOne;
            totalCharactersTwo += randomCharacterTwo;
            passwordOne.textContent = totalCharactersOne;
            passwordTwo.textContent = totalCharactersTwo;
        }
    
    } else if (onlyLettersSymbols && isSymbolsSelected && isNumbersSelected === false) {
        for (let i = 0; i < 15; i++) {
            let randomNumberOne = Math.floor(Math.random() * charactersNoNumbers.length);
            let randomNumberTwo = Math.florr(Math.random() * charactersNoNumbers.length);
            let randomCharacterOne = charactersNoNumbers[randomNumberOne];
            let randomCharacterTwo = charactersNoNumbers[randomNumberTwo];
            totalCharactersOne += randomCharacterOne;
            totalCharactersTwo += randomCharacterTwo;
            passwordOne.textContent = totalCharactersOne;
            passwordTwo.textContent = totalCharactersTwo;
        }
    
    } else if (onlyLettersSymbols && isSymbolsSelected && isNumbersSelected === false) {
        for (let i = 0; i < 15; i++) {
            let randomNumberOne = Math.floor(Math.random() * charactersNoNumbers.length);
            let randomNumberTwo = Math.floor(Math.random() * charactersNoNumbers.length);
            let randomCharacterOne = charactersNoNumbers[randomNumberOne];
            let randomCharacterTwo = charactersNoNumbers[randomNumberTwo];
            totalCharactersOne += randomCharacterOne;       
            totalCharactersTwo += randomCharacterTwo; 
            passwordOne.textContent = totalCharactersOne;      
            passwordTwo.textContent = totalCharactersTwo;
    } 
    
    } else if (onlyLettersNumbers && isSymbolsSelected === false && isNumbersSelected) {
        for (let i = 0; i < 15; i++) {
            let randomNumberOne = Math.floor(Math.random() * charactersNoSymbols.length);
            let randomNumberTwo = Math.floor(Math.random() * charactersNoSymbols.length);
            let randomCharacterOne = charactersNoSymbols[randomNumberOne];
            let randomCharacterTwo = charactersNoSymbols[randomNumberTwo];
            totalCharactersOne += randomCharacterOne;       
            totalCharactersTwo += randomCharacterTwo; 
            passwordOne.textContent = totalCharactersOne;      
            passwordTwo.textContent = totalCharactersTwo;
    } 
}}


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
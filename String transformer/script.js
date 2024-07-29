const input = document.querySelector('input');
const upperCaseOutput = document.querySelector('#uppercase span');
const lowerCaseOutput = document.querySelector('#lowercase span');
const camelCaseOutput = document.querySelector('#camelcase span');
const pascalCaseOutput = document.querySelector('#pascalcase span');
const snakeCaseOutput = document.querySelector('#snakecase span');
const kebabCaseOutput = document.querySelector('#kebabcase span');
const trimCaseOutput = document.querySelector('#trim span');

function capitalizeString(str){
    if(!str) return str;
    return (str[0]?.toUpperCase() + str.slice(1,str.length));
}

function toCamelCase(string){
    const lowerCaseString = string.toLowerCase();
    const wordsArray = lowerCaseString.split(' ');

    const finalArray = wordsArray.map((word,i)=>{
        if(i == 0) return word;
        else return capitalizeString(word);
    });
    return finalArray.join('');
}

function toPascalCase(string){
    const lowerCaseString = string.toLowerCase();
    const wordsArray = lowerCaseString.split(' ');

    const finalArray = wordsArray.map((word,i)=>{
        return capitalizeString(word);
    });
    return finalArray.join('');
}

function toSnakeCase(string){
    return string.replaceAll(' ','_');
}

function toKebabCase(string){
    return string.replaceAll(' ','-');
}

function toTrimCase(string){
    return string.replaceAll(' ','');
}


function updateScreen(){
    lowerCaseOutput.innerText = input.value.trim().toLowerCase();
    upperCaseOutput.innerText = input.value.trim().toUpperCase();
    camelCaseOutput.innerText = toCamelCase(input.value.trim());
    pascalCaseOutput.innerText = toPascalCase(input.value.trim());
    snakeCaseOutput.innerText = toSnakeCase(input.value.trim()); 
    kebabCaseOutput.innerText = toKebabCase(input.value.trim());
    trimCaseOutput.innerText = toTrimCase(input.value.trim());
}

updateScreen();
input.addEventListener('input',updateScreen);
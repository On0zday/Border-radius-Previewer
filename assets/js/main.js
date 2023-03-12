// selicionar inputs 
const inputsTLeft = document.querySelector('input[name="top-left"]');
const inputsBLeft = document.querySelector('input[name="bottom-left"]');


const inputsTRigth = document.querySelector('input[name="top-rigth"]');
const inputsBRigth = document.querySelector('input[name="bottom-rigth"]');

// selicionar a caixa
const box = document.getElementById("box");

function convert (value) {  

    const convert = parseInt(value);
    return convert;
}

inputsTLeft.addEventListener("keyup", (e) => {

    box.style.borderTopLeftRadius = `${parseInt(inputsTLeft.value)}px`;

});


inputsBLeft.addEventListener("keyup", (e) => {

    box.style.borderBottomLeftRadius = `${parseInt(inputsBLeft.value)}px`;

});


inputsTRigth.addEventListener("keyup", (e) => {

    box.style.borderTopRightRadius = `${parseInt(inputsTRigth.value)}px`;

});



inputsBRigth.addEventListener("keyup", (e) => {

    box.style.borderBottomRightRadius = `${parseInt(inputsBRigth.value)}px`;

});
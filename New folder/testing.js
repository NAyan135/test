let wrld = document.querySelector('.btn');
wrld.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Your Name');
    wrld.textContent = 'Hello ' + name;
}

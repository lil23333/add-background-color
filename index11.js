let elem = document.querySelector('#elem');
let ell = elem.children;
for (let el of ell) {
    el.addEventListener ('click', function (){
    el.textContent = el.textContent + '!'
    el.classList.add('colored');
});}

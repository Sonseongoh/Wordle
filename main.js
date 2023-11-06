let Answer="abcde"
document.querySelector('button').addEventListener('click',
function(){
    let input =document.querySelectorAll('.input');

    for(let i=0; i<5; i++){

        if(input[i].value ==Answer[i]){
            input[i].style.background = "green"
        }else if(Answer.includes(input[i].value)){
            input[i].style.background = "yellow"
        }else{
            input[i].style.background = "red"
        }

        input[i].classList.remove('input')


}

let template = `<div>
    <input class="input">
    <input class="input">
    <input class="input">
    <input class="input">
    <input class="input">
</div>`
document.querySelector('body').insertAdjacentHTML
('beforeend',template)

})
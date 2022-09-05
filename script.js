const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')


buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id =='clear'){
            display.innerText = '';
        }else if(display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText);
        }else if(display.innerText == '' && item.id == 'equal'){
            display.innerText = 'Raqam kiriting!!!'
        }else{
            display.innerText += item.id
        }
    }
})

let btnLeft = document.querySelector('.left')
let btnRight = document.querySelector('.right')
let elMain = document.querySelector('.container')

btnLeft.addEventListener('click', ()=>{
    elMain.classList.toggle('dark')
})
btnRight.addEventListener('click', ()=>{
    body.classList.toggle('light')
})



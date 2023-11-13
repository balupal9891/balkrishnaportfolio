
function opentab(tabname){
    let tabs = document.getElementsByClassName('tab-content')
    let tablinks = document.getElementsByClassName('tab-links')
    for(let link of tablinks){
        link.classList.remove('active-link')
    }
    for(let tab of tabs){
        tab.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    console.log(document.getElementById(tabname))
    document.getElementById(tabname).classList.add('active-tab')
}

function openmenu(){
    let a = document.getElementById('navbar')
    a.style.right = "0px"
}
function closemenu(){
    let a = document.getElementById('navbar')
    a.style.right = "-200px"
}


// let bright = document.getElementsByClassName('bright-dark')
// let a = document.getElementById('bright-dark')
// let b = document.getElementById('moon-icon')


// for(let c of bright){
//     c.addEventListener('click',()=>{
//         document.body.classList.toggle('white-theme')
//         if(c.classList.contains('white-theme')){
//             a.style.display = "none"
//             b.style.display = "inline-block"
//         }
//         else{
//             a.style.display = "inline-block"
//             b.style.display = "none"
//         }
//     })
    
// }

// let a = document.getElementById('bright-dark')
// a.addEventListener('click',()=>{
//     document.body.classList.toggle('white-theme')
//     if(a.classList.contains('white-theme')){
//         a.classList.remove('uil-sun')
//         a.classList.add('uil-moon')
//     }
// })


let a = document.getElementById('sun-icon')
let b = document.getElementById('moon-icon')

a.onclick = function(){
    document.body.classList.toggle('white-theme')
    a.style.display = "none";
    b.style.display = "inline-block";
    
}
b.onclick = function(){
    document.body.classList.toggle('white-theme')
    b.style.display = "none";
    a.style.display = "inline-block";
}





// contact form integration with google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzDT-e87Lv2CndYe0vHMve-3MCVj-7K469X197ittU3BX6qjpn71AuQn8EWU4AbQUOe/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting me..! Your message has been received..."))
        .catch(error => console.error('Error!', error.message))
})
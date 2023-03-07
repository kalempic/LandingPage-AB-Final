

/*changing customer quotation-desktop*/

let blockquote = document.getElementById('blockquote');

document.getElementById('jorge').addEventListener('click', () => {
    blockquote.innerHTML = 'It is amaying what has helped me learn about my team.';
});

document.getElementById('bell').addEventListener('click', () => {
    blockquote.innerHTML = 'Thank you for your hudge knowledge base.';
});

document.getElementById('fox').addEventListener('click', () => {
    blockquote.innerHTML = 'I learnd a lot from your presentations.';

});


/*loading more content-mobile*/
let clickMe=document.getElementById("click-me");

function myFunction(){
let style=clickMe.style.display;
if(style=='block')
    {
    clickMe.style.display='none';
    }
else{
    clickMe.style.display='block';
    }    			
}

/*accordion-mobile*/
let acc = document.getElementsByClassName("footer-menu_title");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        const list = document.getElementsByClassName(`list`)[i];
        list.style.display = list.style.display === 'block'
                            ? 'none' : 'block';
    })
}

/*Toggle menu- mobile */
const mobileBtn = document.getElementById('mobile-cta')
nav = document.querySelector('nav')
mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})
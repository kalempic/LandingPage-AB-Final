

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


if (window.screenX <= 768) {
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            const list = document.getElementsByClassName(`list`)[i];
            list.style.display = list.style.display === 'block'
                                ? 'none' : 'block';
        })
    }
}
/*Toggle menu- mobile */
document.getElementsByClassName('hamburger-container')[0].addEventListener(
    'click', () => {
        let firstNav = document.getElementsByClassName('first-nav hide-toggle')[0];
        let secondNav = document.getElementsByClassName('second-nav hide-toggle')[0];
        // let logo = document.getElementsByClassName('logo')[0];
        

        // firstNav.style.display = firstNav.style.display === 'none' ? 'flex' : 'none';
        // document.getElementsByClassName('toggle-direction')[0].style.display = firstNav.style.display === 'flex' ? 'flex' : 'none';
        document.getElementsByClassName('toggle-direction')[0].style.display = 'flex';
        // logo.style.display = firstNav.style.display === 'flex' ? 'none' : 'flex';
        
        // secondNav.style.display = secondNav.style.display === 'none' ? 'flex' : 'none';
        
    }
)


let icon= document.getElementsByClassName('fa-x');
 let nav = document.getElementsByClassName('toggle-direction');
icon[0].addEventListener('click', () => {
nav[0].style.display='none';
})

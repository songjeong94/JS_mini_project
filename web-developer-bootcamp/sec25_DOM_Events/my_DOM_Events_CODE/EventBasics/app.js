const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("You Clicked ME");
    console.log("I HOPE IT WORKD");
}

function scream() {
    console.log("AAAAAA");
    console.log("STOP TOUCHING ME!")
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
    alert('you clicked the h1!')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dbclick', function() {
    alert("CLICKED")
})

function twist(){
    console.log("TWIST")
}

function shout(){
    console.log("SHOUT")
}

const tasButton = document.querySelector('#tas');
tasButton.onclick = twist;
tasButton.onclick = shout;

tasButton.addEventListener('click', twist, {once: true})
tasButton.addEventListener('click', shout)

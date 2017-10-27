var notes = {
    c: document.querySelector('#cAudio'),
    d: document.querySelector('#dAudio'),
    e: document.querySelector('#eAudio'),
    f: document.querySelector('#fAudio'),
    g: document.querySelector('#gAudio'),
    a: document.querySelector('#aAudio'),
    b: document.querySelector('#bAudio')
}

function playNote(letter){
    notes[letter].currentTime = 0
    notes[letter].play()
}
document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('click', function(){
        playNote(box.getAttribute('id'))
    })
})

document.addEventListener('keydown', function(event){
    // console.log(event);

    if(event.keyCode == 65){
        playNote('c')
    }
    else if(event.keyCode == 73){
        playNote('d')
    }
    else if(event.keyCode == 64){
        playNote('e')
    }
    else if(event.keyCode == 66){
        playNote('f')
    }
    else if(event.keyCode == 67){
        playNote('g')
    }
    else if(event.keyCode == 68){
        playNote('a')
    }
})
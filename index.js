const textarea = document.getElementById("textarea")
const title = document.querySelector('.title')
const choiceDiv = document.getElementById('choices')

// keyup listener runs every time any key is pressed
textarea.addEventListener('keyup', (e)=>{
    createChoiceHtml(e.target.value)
    console.log(e.target.value)
    
    if(e.key === 'Enter') {
        pickChoice()
        e.target.value = ''
        
    }
})


function createChoiceHtml(text) {
    // create an array of choices from text by splitting them
    // .filter the empty elements of the array 
    // then .mao the filtered array for trim the elements 
    let choices = text.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim())

    // empty the choiceDiv on every keystroke
    choiceDiv.innerHTML = ''

    // create elements from array elements and append them to choiceDiv
    choices.forEach(choice => {
        const choiceEl = document.createElement('span')
        choiceEl.innerText = choice
        choiceDiv.appendChild(choiceEl)
    });
    
}

function pickChoice() {
    const choiceArray = document.querySelectorAll('span')
    const interval = setInterval(()=> {
        let randomChoice = choiceArray[(Math.floor(Math.random() * choiceArray.length))]
        highlight(randomChoice)

        setTimeout(()=>unhighlight(randomChoice),200)

    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
        const random = choiceArray[(Math.floor(Math.random() * choiceArray.length))]
        random.classList.add('highlight')
        console.log(random)
        }, 200);
        
    }, 2000);
}

function highlight(choice) {
    choice.classList.add('highlight')
}
function unhighlight(choice) {
    choice.classList.remove('highlight')
}



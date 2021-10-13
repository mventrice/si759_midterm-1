const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

showRhymesButton.addEventListener('click', () =>{
    rhymesOutput.innerHTML = ''
    let word = wordInput.value;
    getRhymes(word, (results) =>{
        if(results){
            for(const obj of results){
            const newLi = document.createElement('li');
            newLi.classList.add('list-group-item');
            newLi.textContent = obj.word;
            rhymesOutput.append(newLi)
            }
        }
    })
})

clearButton.addEventListener('click', () => {
    rhymesOutput.innerHTML = '';
    wordInput.value = '';
})
const clickCountButton = document.querySelector('#problem-3 #click-count');


let count = 0
clickCountButton.addEventListener('click', ()=>{
    count++
    let s = addS(count)
    clickCountButton.textContent = `You clicked the button ${count} time${s}`;
})



//**Pythonic way**//
// let previous_count = 0
// clickCountButton.addEventListener('click', ()=>{
//     count = previous_count + 1;
//     previous_count = count;
//     s = addS(count)
//     clickCountButton.textContent = `You clicked the button ${count} time${s}`;
// })
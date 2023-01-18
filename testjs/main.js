const inputA = document.querySelector(`#inputA`)
console.log(inputA)
inputA.addEventListener(`focusout`, () => {
    console.log(`focusout`)
})
const aa = document.querySelector(`#aa`)
aa.addEventListener(`click`, () => {
    fetch(`https://localhost:44342/Home/FileDownload`)
        .then(res => { console.log(res) })
})
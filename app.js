const inputForm = document.querySelector('#userNR')
inputForm.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        console.log(inputForm.value);
    }
})
const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener("blur", event => {
    if (event.currentTarget.value.length === 6) {
        return  inputRef.classList.replace('invalid', 'valid');
    } 
        return  inputRef.classList.add('invalid');
  });
document.getElementById('addInputButton').addEventListener('click', function (){
    const inputContainer = document.getElementById('inputContainer');

    //Create new Input field
    const newInputField = document.createElement('input');
    newInputField.type = "text";
    newInputField.className = 'input-field';

    //Create save Button for the input field
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Speichern';
    saveButton.addEventListener('click', function(){
        const inputValue = newInputField.value;
        if(inputValue){
            const outputContainer = document.getElementById('outputContainer');
            const newText = document.createElement('p');
            newText.textContent = inputValue;
            outputContainer.appendChild(newText);
            newInputField.remove();
            saveButton.remove();
        }
    });
    inputContainer.appendChild(newInputField);
    inputContainer.appendChild(saveButton);
});
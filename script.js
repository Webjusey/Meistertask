$(document).ready(function(){
    $('#addInputButton').on('click', function(){
        const $inputContainer = $('#inputContainer');

        // Create new input field
        const $newInputField = $('<input>', {
            type: 'text',
            class: 'input-field'
        });

        // Create save button for the input field
        const $saveButton = $('<button>', {
            text: 'Speichern'
        }).on('click', function(){
            const inputValue = $newInputField.val();

            if(inputValue){
                const $newText = $('<p>').text(inputValue);
                $('#outputContainer').append($newText);
                $newInputField.remove();
                $saveButton.remove();
            }
        });

        $inputContainer.append($newInputField, $saveButton);
    });
});
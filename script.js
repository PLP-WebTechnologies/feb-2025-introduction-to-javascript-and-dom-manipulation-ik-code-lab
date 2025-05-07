document.addEventListener('DOMContentLoaded', function() {
    const dynamicTextElement = document.getElementById('dynamicText');
    const styleButton = document.getElementById('styleButton');
    const addElementButton = document.getElementById('addElementButton');
    const container = document.getElementById('container');

    
    setTimeout(() => {
        dynamicTextElement.textContent = 'The text has been updated dynamically!';
    }, 2000);

    
    styleButton.addEventListener('click', function() {
        dynamicTextElement.classList.toggle('styled');
    });

    
    let newElementAdded = false;
    addElementButton.addEventListener('click', function() {
        if (!newElementAdded) {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'This is a newly added paragraph!';
            newParagraph.classList.add('new-element');
            container.appendChild(newParagraph);
            newElementAdded = true;
            addElementButton.textContent = 'Remove Element';
        } else {
            const elementToRemove = container.querySelector('.new-element');
            if (elementToRemove) {
                container.removeChild(elementToRemove);
                newElementAdded = false;
                addElementButton.textContent = 'Add Element';
            }
        }
    });
});
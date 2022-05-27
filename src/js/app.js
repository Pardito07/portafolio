const form = document.querySelector('#form');
const projects = document.querySelector('#headerButton');

eventListeners();
function eventListeners(){
    form.addEventListener('submit', validateForm);

    projects.onclick = function(){
        goTo('showProjects');
    }

    document.addEventListener('DOMContentLoaded', () =>{
        window.location.hash = '';
    });
}

function validateForm(e){
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if(name === '' || email === '' || message === ''){
        showAlert('Todos los campos son obligatorios');
        return;
    }

    showSpinner();
}

function goTo(elementId){

    location.hash = '#' + elementId;
}

function showAlert(message){
    const alert = document.querySelector('.alert');

    if(!alert){

        const divMessage = document.createElement('p');
        divMessage.classList.add('alert', 'alert-danger', 'text-center', 'error');
        
        divMessage.textContent = message;
    
        form.insertBefore(divMessage, document.querySelector('.contact__fieldset'));

        setTimeout(() => {
            divMessage.remove();
        }, 3000);
        
    }
}

function showSpinner(){
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display = 'none';

        setTimeout( () => {
            form.reset();
        })
    }, 3000);
}
import nav from './nav.js';
import showcase from './showcase.js';
import services from './services.js';
import designers from './designers.js';
import contact from './contact.js';
import errorPage from './errorPage.js';

const header = document.getElementById('header');
const root = document.getElementById('root');

const pages = {
    showcase: showcase,
    services: services,
    designers: designers,
    contact: contact,
}

document.addEventListener('DOMContentLoaded', () => {
    header.innerHTML = nav.render();
    if(location.hash){
        root.innerHTML = pages[location.hash.slice(1)].render();
    } else {
        root.innerHTML = showcase.render();
    }
})

window.addEventListener('hashchange', () => {
    if(pages[location.hash.slice(1)]) {
        root.innerHTML = pages[location.hash.slice(1)].render();
    } else {
        root.innerHTML = errorPage.render();
    }
    
})

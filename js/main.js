const modifiers = {
    elHeaderOpen: 'header--open'
};
const elHeader = document.querySelector('.header');
const elHeaderToggler = elHeader.querySelector('.header__toggler');

if (elHeaderToggler) {
    elHeaderToggler.addEventListener('click', function () {
        elHeader.classList.toggle(modifiers.elHeaderOpen);
    });
};
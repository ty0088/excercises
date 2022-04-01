function dropClickListener() {
    const linkElem = document.querySelectorAll('.link.drop-icon');
    linkElem.forEach(elem => elem.addEventListener('click', dropMenuToggle));
}

function dropMenuToggle(event) {
    const menuNo = event.target.getAttribute('data-menu');
    const menuElem = document.querySelectorAll(`.menu-container[data-menu="${menuNo}"]`);
    menuElem.forEach(elem => elem.classList.toggle('shown'));
    const dropIconElem = document.querySelectorAll(`.drop-icon[data-menu="${menuNo}"]`);
    dropIconElem.forEach(elem => {
        if (elem.innerText === 'arrow_drop_down') {
            elem.innerText = 'arrow_drop_up';
        } else {
            elem.innerText = 'arrow_drop_down';
        }
    });
}


dropClickListener();
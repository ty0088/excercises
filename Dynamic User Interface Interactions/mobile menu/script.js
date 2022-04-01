function menuExpand() {
    // document.querySelector('.menu-container').classList.toggle('expand');
    document.querySelectorAll('.menu-container, .left, .right').forEach(elem => elem.classList.toggle('expand'));
}
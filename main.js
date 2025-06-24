const icon = document.getElementById('icon')
const listMenu = document.getElementById('list-menu')

icon.addEventListener('click', () => {
    listMenu.classList.toggle('hidden');
});
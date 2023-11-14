function showPoem(title, content) {
    // Replace newline characters with HTML line breaks
    content = content.replace(/\n/g, '<br>');

    document.getElementById('modal-title').innerHTML = title;
    document.getElementById('modal-content').innerHTML = `<div class="poem-content">${content}</div>`;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() 
{
    document.getElementById('modal').style.display = 'none';
}

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

function closeMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.remove('show');
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

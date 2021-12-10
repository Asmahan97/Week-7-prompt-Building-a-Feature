const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
//change theme between light and dark
document.body.classList.toggle('dark');
});
const bntMenu = document.getElementById('menu');
const menuList = document.getElementById('ul');

bntMenu.addEventListener('click',function(){
    menuList.classList.toggle('show');
});
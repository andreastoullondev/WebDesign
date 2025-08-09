document.querySelector('.menu-mobile h2').addEventListener('click', () => {
    const menu = document.querySelector('.menu-mobile ul');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    



    if(isMobile){
        menu.style.display = menu.style.display === "none" ? "block" : "none";
    }
});
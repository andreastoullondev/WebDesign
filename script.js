document.querySelector('.menu-mobile h2').addEventListener('click', () => {
    const menu = document.querySelector('.menu-mobile ul');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    



    if(isMobile){
        menu.style.display = menu.style.display === "none" ? "block" : "none";
    }
});


function testarPing(){
    // conexão com HTML 
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Testando ping...';

    // Simulação do tempo de resposta

    setTimeout(() => {
        const sucesso = Math.random() > 0.3;// 70% de chance de sucesso

        if(sucesso){
        resultado.innerHTML = 'Ping bem sucedido" conexão estavel.';
        }else{
        resultado.innerHTML = 'Falha no ping! Verifique a conexão';
        }
    },1500);
    
      
        
    
}
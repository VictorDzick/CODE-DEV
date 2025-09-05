//fade-up, fade-down, fade-left, fade-right

//zoom-in, zoom-out

//flip-up, flip-left, flip-right 

// EX TAG PARA TROCA EFEITO SÓ COLOCAR NO LUGAR DAS OUTRAS DENTROS DO COIDIGOk
//data-aos="flip-right"

const accordionList = document.querySelectorAll('.js-accordion-list dt')

// Fazendo que apareça primeiro elemento da lista (curiosidade)
accordionList[0].classList.add('ativo')
accordionList[0].nextElementSibling.classList.add('ativo')


accordionList.forEach(itemDT=>{
    itemDT.addEventListener('click', accordion)
})

function accordion(){
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
    // O método nextElementdsibling retorna o próximo elemento da lista
}
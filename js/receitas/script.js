function openModal() {
    const modal = document.querySelector('.novo-item-modal');
    modal.classList.add('login-modal-open');
}

function closeModal() {
    const modal = document.querySelector('.novo-item-modal');
    modal.classList.remove('login-modal-open');
}

function adicionar() {
    const receitasContainer = document.querySelector('.receitas-items');
    const quanto = document.querySelector('#quanto');
    const quando = document.querySelector('#quando');
    const descricao = document.querySelector('#descricao');

    const erro = document.querySelector('.adicionar-erro');

    if(!quanto.value || !quando.value || !descricao.value) {
        erro.classList.add('erro-mostrar');
        return;
    }

    erro.classList.remove('erro-mostrar');

    const novoItem = document.createElement('div');
    novoItem.classList.add('dashboard-item');

    const novoItemValor = document.createElement('span');
    novoItemValor.textContent = 'R$ ' + quanto.value;
    novoItemValor.classList.add('item-valor');

    const novoItemData = document.createElement('span');
    novoItemData.textContent = quando.value;
    novoItemData.classList.add('item-data');


    const novoItemDescricao = document.createElement('span');
    novoItemDescricao.textContent = descricao.value;
    novoItemDescricao.classList.add('item-descricao');

    const icones = document.createElement('div');
    
    const iconeItemAtualizar = document.createElement('img');
    iconeItemAtualizar.classList.add('icone-item')
    iconeItemAtualizar.src = '../../assets/atualizar.png'
    
    const iconeItemLixo = document.createElement('img');
    iconeItemLixo.classList.add('icone-item')
    iconeItemLixo.src = '../../assets/lixo.png'


    icones.classList.add('icones-item');

    icones.appendChild(iconeItemAtualizar);
    icones.appendChild(iconeItemLixo);
    novoItemDescricao.appendChild(icones);

    novoItem.appendChild(novoItemValor);
    novoItem.appendChild(novoItemData);
    novoItem.appendChild(novoItemDescricao);

    receitasContainer.appendChild(novoItem);


    quanto.value = '';
    quando.value = '';
    descricao.value = '';

    const modal = document.querySelector('.novo-item-modal');
    modal.classList.remove('login-modal-open');
}
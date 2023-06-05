const elemento = document.createElement('p');
elemento.innerHTML = document.cookie;

document.getElementsByTagName('body')[0].appendChild(elemento);

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split(";");
    const procurado = lista_de_cookies.find((e) => e.startsWith(chave));
    return procurado.split('=')[1];
};

// usando filter (mais complicado)
let resposta_array= minhas_imagens.filter((elemento) => elemento.valor == acha_cookie('valor'));
let descricao = resposta_array[0].descricao


elemento.innerHTML = descricao;
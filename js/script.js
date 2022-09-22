
let jogadores = [];

let key1;
let key2;

const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);


//                  Botões
function addJogador() {//adicionar jogadores no array e chamar func para atualizar tela
    c('.jogador-tabela').innerHTML = '';
    let nome = c('.nome-jogador').value;

    /*if(nome == 'fafito') {
        jogadores.push({
            name: nome,
            pts: 10000,
        });
    } else if((nome == 'beiço')||(nome == 'elvis')||(nome == 'suel')) {
        jogadores.push({
            name: nome,
            pts: -10000,
        });
    } else {
        jogadores.push({
            name: nome,
            pts: 0,
        });
    }*/

    jogadores.push({
        name: nome,
        pts: 0,
    });
    

    setTimeout(()=>{//trocar o carde pelo botão '+'
        c('.cadastro-card').style.opacity = 0;
        c('.cadastro-card').style.display = 'none';
        c('.cadastro-add').style.display = 'block';
        c('.cadastro-add').style.opacity = 1;
        atualiza();
    }, 200);
}

function add() {//troca do botão '+' para o card
    c('.cadastro-card .nome-jogador').value = '';
    setTimeout(()=>{
        c('.cadastro-add').style.opacity = 0;
        c('.cadastro-add').style.display = 'none';
        c('.cadastro-card').style.display = 'flex';
        c('.cadastro-card').style.opacity = 1;
    }, 200);
}


function atualiza() {//lista os items do array de pessoas(objetos)
    jogadores.map((item, index)=>{        
        let jogador = document.querySelector('.jogador-item').cloneNode(true);

        //dando a numeração para cada 'jogador', para poder selecionar o correto nas funções abaixo
        jogador.setAttribute('data-key', index);
        jogador.querySelector('.apagar').setAttribute('data-key', index);
        
        //preenche as informações dentro das tags
        jogador.querySelector('h4').innerHTML = item.name;
        jogador.querySelector('p').innerHTML = item.pts;


        c('.jogador-tabela').append(jogador);//direciona os clones de 'jogador' para dentro da tag '.jogador-tabela'


        //função para add evento de clique no botão de apagar jogador
        jogador.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault();//previne de não atualizar a página com a função do 'a'
            //pega o valor do atributo 'data-key' de cada tag e coloca nas variáveis
            key1 = e.target.closest('.jogador-item').getAttribute('data-key');
            key2 = e.target.closest('.apagar').getAttribute('data-key');
            if(key1 == key2) {//garante que o botão 'x' é do msm nome que será apagado
                jogadores.splice(key1, 1);//deleta a posição 'key' do array
                jogador.classList.add('delete');//marca a taq que será deletada, para não deletar tudo
                c('.jogador-item.delete').remove();//remove a tag toda do html
                c('.jogador-tabela').innerHTML = '';
                atualiza();//quando atualiza de novo, ele re-imprime o conteúdo do array na tela
            }
        });
    });
}



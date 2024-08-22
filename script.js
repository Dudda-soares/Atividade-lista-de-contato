const nome = document.getElementById('nome')
const tele = document.getElementById('tel')
const email = document.getElementById('email')
const nomes = []
const contato = []
const mail = []
const form = document.getElementById('form-contato')
const tabelaContatos = document.querySelector('#tablebody tbody');

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionar()
})

function inLista(n, l){
    if(l.indexOf (n) != -1){
        return true
    }else {
        return false
    }
}

function numeroNecessario(n){
    if(n.length < 11){
        return false
    }else{
        return true
    }
}

function adicionar(){
    const tipoContato = obterTipoContato()
    if(numeroNecessario(tele.value) && !inLista(nome.value, nomes) && !inLista(tele.value, contato) && !inLista(email.value, mail)){
        
        nomes.push(nome.value)
        contato.push(tele.value)
        mail.push(email.value)
        adicionaLinha(tipoContato)

        nome.value = ''
        tele.value = ''
        email.value =''
      
    }else{
        alert('Numero invalido ou dados ja encontrado na lista.')
    }
    
}
function obterTipoContato() {
    const fsex = document.getElementsByName('celtel');
    for (let i = 0; i < fsex.length; i++) {
        if (fsex[i].checked) {
            return fsex[i].value;
        }
    }
    return null;
}

function adicionaLinha(tipoContato){
    const icone = tipoContato === 'cel' ? 'imagens/bolacel.png' : 'imagens/telefonev1.png'
  
    let linha = '<tr>'
    linha += `<td style="text-transform: uppercase;">${nome.value}</td>`
    linha += `<td style="text-transform: uppercase; text-align: center;">${tele.value}<img src="${icone}" style="width:37px; height:37px;margin-left:55px; border-radius: 15px;text-align: center; "></td>`
    linha += `<td style="text-transform: uppercase;">${email.value}</td>`
    linha += '</tr>'

    tabelaContatos.innerHTML += linha;
    tabelaContatos.style.backgroundColor = '#f2f2f2'
}  




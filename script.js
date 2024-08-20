const nome = document.getElementById('nome')
const tele = document.getElementById('tel')
const email = document.getElementById('email')
const nomes = []
const contato = []
const mail = []
const form = document.getElementById('form-contato')

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionar()
    atualizaTabela()
})

function inLista(n, l){
    if(l.indexOf (n) != -1){
        return true
    }else {
        return false
    }
}


function adicionar(){
    if(!inLista(nome.value, nomes) && !inLista(tele.value, contato) && !inLista(email.value, mail)){
        
        adicionaLinha()

    }else{
        alert('Valor invalido ou ja encontrado na lista.')
    }
    
}

function adicionaLinha(){
    nomes.push(nome.value)
    contato.push(tele.value)
    mail.push(email.value)

    //alert(`o nome é ${nomes} e o numero é ${contato}e o email ${mail}`)

    let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td>${tele.value}</td>`
    linha += `<td>${email.value}</td>`
    linha += '</tr>'

    linhas += linha

    nome.value = ''
    tele.value = ''
    email.value =''
}
function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function inLista(n, l){
    if(l.indexOf (n) != -1){
        return true
    }else {
        return false
    }
}
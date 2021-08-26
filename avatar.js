var carta1 = {
    nome: "Aang",
  imagem: "https://i.pinimg.com/originals/4e/38/73/4e38736ff90e3fe541a22961039f1d87.gif",
    atributos: {
        ar: 100,
        fogo: 70,
        terra: 70,
        agua: 90
      
    }
}

var carta2 = {
    nome: "Korra",
    imagem: "https://i.pinimg.com/originals/c8/f1/c0/c8f1c0f90d647e4b1843162108dc6d18.gif",
    atributos: {
        ar: 60,
        fogo: 90,
        terra: 80,
        agua: 90
    }
}

var carta3 = {
    nome: "Kyoshi",
  imagem: "https://thumbs.gfycat.com/DopeyPhonyBuckeyebutterfly-size_restricted.gif",
    atributos: {
        ar: 70,
        fogo: 90,
        terra: 100,
        agua: 60 
    }
}

var carta4 = {
    nome: "Yangchen",
  imagem: "https://33.media.tumblr.com/608bea1696042c5949a7518587233ba9/tumblr_n6gf7layRA1rd8y4ao2_250.gif",
    atributos: {
        ar: 100,
        fogo: 90,
        terra: 60,
        agua: 70      
    }
}


var carta5 = {
    nome: "Roku",
  imagem: "https://static.wikia.nocookie.net/powerlisting/images/d/d8/Roku.gif",
    atributos: {
        ar: 80,
        fogo: 90,
        terra: 70,
        agua: 80      
    }
}

var carta6 = {
    nome: "Kuruk",
  imagem: "https://thumbs.gfycat.com/MiserableAmusedGenet-size_restricted.gif",
    atributos: {
        ar: 70,
        fogo: 80,
        terra: 60,
        agua: 90      
    }
}

var carta7 = {
    nome: "Wan SUPER TRUNFO",
  imagem: "https://i.gifer.com/OrDJ.gif",
    atributos: {
        ar: 110,
        fogo: 110,
        terra: 110,
        agua: 110
      
    }
}


var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()

atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
  
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibeCartaJogador()
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = `<img
                            src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
                            style=" width: inherit; height: inherit; position: absolute;">`;
      divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
   var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
   
   var opcoesTexto = ""
   
   for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " "+ cartaJogador.atributos[atributo] 
  }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked){
      console.log(radioAtributo[i].value)
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var divResultado = document.getElementById("resultado")
 var atributoSelecionado = obtemAtributoSelecionado()

 if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
   htmlResultado = '<p class="resultado-final">Seu AVATAR SUPREMO venceu a Rinha de Avatar com esse elemento</p>'
   pontosJogador++
   } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){ 
     htmlResultado = '<p class="resultado-final">O AVATAR SUPREMO da máquina venceu esta batalha elemental</p>'
     pontosMaquina++
   } else { 
   htmlResultado = '<p class="resultado-final">Os dois avatares são igualmente SUPREMOS nesse elemento</p>'
  }
  
  if (cartas.length <= 1){                           
    if (pontosJogador > pontosMaquina){htmlResultado = '<p class="resultado-final">O jogador é o campeão da Rinha de Avatar!</p>'}
    else if (pontosMaquina > pontosJogador) {htmlResultado = '<p class="resultado-final">O computador venceu esta Rinha Avatar!</p>' }
    else {
      htmlResultado = '<p class="resultado-final">A Rinha Avatar está empatada</p>'
    }
     alert("Fim de Jogo")
    document.getElementById('btnProximaRodada').disabled = true
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }
    
    
  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
  
  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = `<img
                            src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
                            style=" width: inherit; height: inherit; position: absolute;">`;
      divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
   var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
   
   var opcoesTexto = ""
   
   for (var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " "+ cartaMaquina.atributos[atributo] 
  }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}  

function proximaRodada(){
 var divCartas = document.getElementById('cartas')

 divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div><div id="carta-maquina" class="carta">`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
} 
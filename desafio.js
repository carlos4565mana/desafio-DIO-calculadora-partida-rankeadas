function promptInt(mensagem, tenteNovamente) {
  var msg = mensagem;
  while (true) {
      let ret = parseInt(prompt(msg));
      if (!isNaN(ret)) return ret;
      msg = tenteNovamente;
  }
}
let victory = promptInt("Por favor digite o numero de vitorias: ","Por favor, digite um número.\nTente novamente.");
let defeat =  promptInt("Por favor digite o numero de derrotas: ","Por favor, digite um número.\nTente novamente.");

let result = rank(victory,defeat)
alert(result)

function rank(victory, defeat){
  let resultRank = victory - defeat;
  let nivel = "";
  if (resultRank <= 10) {
    nivel = "Ferro"
  } else if (resultRank <= 20) {
    nivel = "Bronze"
  } else if (resultRank <= 50) {
    nivel = "Prata"
  } else if (resultRank <= 80) {
    nivel = "Ouro"
  } else if (resultRank <= 90) {
    nivel = "Diamante"
  } else if (resultRank <= 100) {
    nivel = "Lendário"
  } else if (resultRank >= 100) {
    nivel = "Imortal"
  }
  return `O Herói tem de saldo de ${resultRank} e está no nível de ${nivel}`
}




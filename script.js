var numeroSecreto = parseInt(Math.random() * 11);
var count = 0;

function Chutar() {
  document.getElementById("click").innerHTML += "<input type='radio'>";
  count++;
  if (count == 4) {
    document.getElementById("click").disabled = true;
    alert("Vixi! Tentativas excedidas.");
    return;
  }

  var elementResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementResultado.innerHTML = "URRUU! Você acertou.";
  } else if (chute > 10 || chute < 0) {
    elementResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute > numeroSecreto && chute != numeroSecreto) {
    elementResultado.innerHTML =
      "Errou, o número chutado é maior que o Número Secreto.";
  } else if (chute < numeroSecreto && chute != numeroSecreto) {
    elementResultado.innerHTML =
      "Errou, o número chutado é menor que o Número Secreto.";
  }
}
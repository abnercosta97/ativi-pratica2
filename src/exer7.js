let nros = "19,11,5,10,20";
let nrosCopy = nros.split(",");
let soma = 0;
for (let i = 0; i < nrosCopy.length; i++) {
  soma += parseInt(nrosCopy[i]);
}
console.log("Somatório:", soma);
//nrosCopy de mozilla.org https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
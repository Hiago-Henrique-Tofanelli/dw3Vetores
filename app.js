const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT;

function ordenarVetor(vetor) {
//esta função ordena o vetor do menor para o maior número
    return vetor.slice().sort((a, b) => a - b);
}
function encontrarMinMax(vetor) {
//esta função encontra o menor número e o maior número tendo como base o vetor ordenado
//onde i[0] é o menor número e i[sortedArray.length - 1](tamanho do vetor), é o maior número
    if (vetor.length === 0) {
      return { menor: null, maior: null };
    }
  
    const sortedArray = ordenarVetor(vetor);
    const menor = sortedArray[0];
    const maior = sortedArray[sortedArray.length - 1];
  
    return { menor, maior };
  }
  
//@ Cria uma rota para o endereço raiz.
app.get('/', (req, res) => {
//recebe-se um vetor não ordenado em formato json, após isso ordena-se o vetor com a função vetorOrdenado
//e encontra-se o menor valor(min) e o maior valor(max)
let vetorNaoOrdenado = [1, 2, 10, 3, 8, 21, 32, 45];

let jsonData = JSON.stringify({ vetor: vetorNaoOrdenado });

const vetorOrdenado = ordenarVetor(vetorNaoOrdenado);

const { menor, maior } = encontrarMinMax(vetorNaoOrdenado);

res.json({ vetorOrdenado, menor, maior });
});

app.get('/minMax', (req, res) => {

//recebe-se um vetor não ordenado em formato json, após isso
//encontra-se o menor valor(min) e o maior valor(max)
  let vetor = [1 , 3, 0, 200, 42, 7, 2, 100];
  
  let jsonData = JSON.stringify({ vetor: vetor });
  
  const { menor, maior } = encontrarMinMax(vetor);
  
  res.json({ vetor, menor, maior });
  });
  
app.listen(port, () => {
console.log('Executando a aplicação ' , process.env.APP_NAME);
console.log('Example app listening on port ', port);
});
  
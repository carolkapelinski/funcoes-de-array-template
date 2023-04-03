

// A primeira deve receber um array de números,
//  e retornar um novo array com todos os números do array original  multiplicados por 3.

const multiplicaPor3 = (array) => {
  const novoArray = []
  for (let i = 0; i < array.length; i++) {
    const numeroMultiplicado = array[i] * 3
    novoArray.push(numeroMultiplicado)
  }
  return novoArray
}

const arrayNumeros = [0, 8, 5, 7, 2, 1]
console.log("arrayNumeros", arrayNumeros);
console.log("multiplicaPor3", multiplicaPor3(arrayNumeros));

// A segunda deve receber um array de números,
//  e retornar um novo array apenas com os números pares do array original.

const retornaPares = (array) => {
  const novoArray = []
  for (let elemento of array){
    if (elemento % 2 === 0){
      novoArray.push(elemento)
    }
  }
  return novoArray
}

console.log("retorna pares" , retornaPares(arrayNumeros));


// Usando o map(), percorra um array de números, calcule o triplo de cada número e
//  retorne um novo array com os valores triplicados.

const arrayMultiplicadoPor3 = arrayNumeros.map((elemento, indice, arrayInteiro) => {
  return elemento * 3
})
console.log(arrayMultiplicadoPor3);

// Usando o filter(), percorra um array de números e 
// retorne um novo array que contenha apenas os números pares presentes no array original.

const arrayPares = arrayNumeros.filter((elemento) => {
  if (elemento % 2 === 0) {
    return true
  }
})
console.log(arrayPares);

////
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

// Com o array de pokémons disponibilizado, faça o que se pede:
// Declare uma função que receba como parâmetro o objeto poke, e que defina a propriedade vida como 100.
// Utilize o map() e a função criada no item 1 para alterar a propriedade vida de todos os objetos do array
//  pokemons. Guarde o novo array numa variável pokemonsVidaCheia.
// Utilize o filter() e uma função não-nomeada para retornar apenas os pokémons de fogo. 
// Guarde o novo array numa variável pokemonsDeFogo.

function novaFuncao (poke) {
  poke.vida = 100
}

const pokemonsVidaCheia = pokemons.map((elemento, indice, arrayInteiro) => {
  return indice = 100
})
console.log(pokemonsVidaCheia);

const pokemonsDeFogo = pokemons.filter((fogo) => {
  if ( fogo.tipo === 'fogo')
  return true
  })
console.log(pokemonsDeFogo);
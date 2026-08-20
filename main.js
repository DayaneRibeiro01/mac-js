

import read from "readline-sync"
import chalk from "chalk"

let nome = read.question("Digite o seu nome: ")
let idade = Number(read.question("Qual a sua idade: "))
let altura = parseFloat(read.question("Qual a sua altura: "))
let peso = parseFloat(read.question("Qual o seu peso: "))


console.log(`Olá, ${nome}`);

let imc = peso / (altura ** 2)

if (imc <=18.5) {
    console.log("Magreza");
} else if(imc <=24.9) {
    console.log("Ideal");
} else if (imc >30) {
    console.log("Obesidade");
}
console.log(`Seu IMC é: ${imc.toFixed(2)}`)




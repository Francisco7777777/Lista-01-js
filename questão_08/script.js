let n = parseInt(prompt('Digite um número inteiro positivo n'));
let fatorial = 1;

for(let i = 2; i <= n; i++) {
    fatorial *= i; 
}

console.log(`O fatorial ${n}! é ${fatorial}`);
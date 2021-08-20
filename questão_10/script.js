let n = parseInt(prompt('Digite um número inteiro positivo n'));

for(var i = 1; i * (i+1) * (i+2)  < n; i++) {}

if(i * (i+1) * (i+2) === n){
    console.log(`O número ${n} é um numero triangular`);
} else {
    console.log(`O número ${n}  não é um numero triangular`);
}

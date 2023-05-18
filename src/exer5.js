let placa = "abc1234";
for(let i = 0; i < placa.length; i++){
    if(placa.charCodeAt(i) <= 57)
    console.log(placa[i],placa.charCodeAt(i));
}
//placa.charCodeAt(i) >= 48 &&  uma possibilidade
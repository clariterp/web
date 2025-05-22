function sumar(){
    let numero1=parseInt(document.getElementById("numero1").value);
     let numero2=parseInt(document.getElementById("numero2").value);
    let resultado=numero1+numero2;
    document.getElementById("resultado").value=resultado;
}
function operar(){
    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    let resultado
    let op=document.getElementById("operar").value;
    if(op=="suma"){
        resultado=numero1+numero2;
    }
    if(op=="resta"){
        resultado=numero1-numero2;

    }
    if(op=="multiplicar"){
        resultado=numero1*numero2;
    }
    document.getElementById("resultado").value=resultado;
}
function autos(){
    let op1=document.getElementById("marca").value;
    let op2=document.getElementById("tipo").value;
    if(op1=="fiat"&&op2=="eco"){
        document.getElementById("resultado2").textContent="el valor es de $15,000";
    }
    if(op1=="fiat"&&op2=="4x4"){
        document.getElementById("resultado2").textContent="el valor es de $30,000";
    }
    if(op1=="fiat"&&op2=="dep"){
        document.getElementById("resultado2").textContent="el valor es de $40,000";
    }
    if(op1=="fiat"&&op2=="auto"){
        document.getElementById("resultado2").textContent="el valor es de $25,000";
    }
    if(op1=="reno"&&op2=="eco"){
        document.getElementById("resultado2").textContent="el valor es de $15,000";
    }
    if(op1=="reno"&&op2=="4x4"){
        document.getElementById("resultado2").textContent="el valor es de $30,000";
    }
    if(op1=="reno"&&op2=="dep"){
        document.getElementById("resultado2").textContent="el valor es de $40,000";
    }
    if(op1=="reno"&&op2=="auto"){
        document.getElementById("resultado2").textContent="el valor es de $25,000";
    }
    if(op1=="toyo"&&op2=="eco"){
        document.getElementById("resultado2").textContent="el valor es de $15,000";
    }
    if(op1=="toyo"&&op2=="4x4"){
        document.getElementById("resultado2").textContent="el valor es de $30,000";
    }
    if(op1=="toyo"&&op2=="dep"){
        document.getElementById("resultado2").textContent="el valor es de $40,000";
    }
    if(op1=="toyo"&&op2=="auto"){
        document.getElementById("resultado2").textContent="el valor es de $25,000";
    }
    if(op1=="ford"&&op2=="eco"){
        document.getElementById("resultado2").textContent="el valor es de $15,000";
    }
    if(op1=="ford"&&op2=="4x4"){
        document.getElementById("resultado2").textContent="el valor es de $30,000";
    }
    if(op1=="ford"&&op2=="dep"){
        document.getElementById("resultado2").textContent="el valor es de $40,000";
    }
    if(op1=="ford"&&op2=="auto"){
        document.getElementById("resultado2").textContent="el valor es de $25,000";
    }
}
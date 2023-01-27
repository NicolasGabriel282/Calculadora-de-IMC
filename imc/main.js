function CalcularImc(){
    var nome=document.getElementById('nome').value;
    var regex= /^[a-zA-Z]+[a-zA-Z\s]*$/
    if (nome ==''||nome===null||!regex.test(nome))
        {
        window.alert("Digite um nome valido")
        return;
        }
    var peso=document.getElementById("peso").value;
    if (peso==''||peso===null)
        {
        window.alert("Digite um peso valido")
        return;
        }
    var peso=Number.parseFloat(peso.replace(",","."));
    var altura=document.getElementById('altura').value;
    if(altura==''||altura===null)
        {
        window.alert("Digite uma altura valida")
        return;
        }
    var altura=Number.parseFloat(altura.replace(",","."));
    var imc=peso/(altura*altura);
    var imc=Number(imc.toFixed(2))
    
    if (imc < 18.5) 
        { 
        imc = imc.toLocaleString();
        document.getElementById("resultado").innerHTML=`${nome} seu IMC foi de:<br>${imc}<br> Categoria:<br>Baixo Peso`;
        }
    else if(imc > 18.5 && imc < 25)
        {
        imc = imc.toLocaleString();
        document.getElementById("resultado").innerHTML=`${nome} seu IMC foi de:<br>${imc}<br>Categoria:<br>Normal`;
        }
    else if(imc > 25 && imc < 30)
        {
        imc = imc.toLocaleString();
        document.getElementById("resultado").innerHTML=`${nome} seu IMC foi de:<br>${imc}<br>Categoria:<br>Sobrepeso`;
        }
    else if(imc > 30)
        {
        imc = imc.toLocaleString();
        document.getElementById("resultado").innerHTML=`${nome} seu IMC foi de:<br>${imc}<br>Categoria:<br>Obesidade`;
        }
    else if(imc != Number || isNaN(imc))
        {
        window.alert("Digite um valor correto")
         }
}
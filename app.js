// 
  function calc(){
     let nnumber1=document.getElementById("num1").value;
    let nnumber2=document.getElementById("num2").value;
     let operator=document.getElementById("operater").value;
    let lbloutput=document.getElementById("lbloutput");

    let number1=Number(nnumber1);
    let number2=Number(nnumber2);
    console.log("Number 01 : "+number1+" "+"Number 02 : "+number2+" "+"Operator : "+operator);

    lbloutput.innerHTML="Number 01 :    "+number1+"        "+"Number 02 :     "+number2+"       "+"Operator :     "+operator;
    let finall=0;
     switch(operator){
        case "+" : 
            finall=number1+number2;
            break;
       case "-" : 
           finall=number1-number2;
            break;        
       case "*" : 
            finall=number1*number2;
                         break;
        case "/" : 
             finall=number1/number2;
            break;   

        case "%" : 
            finall=number1%number2;
            break;  
        default:
            console.log("Invalid Operater");        
            break;

    }

    console.log(finall);
     lbloutput.innerHTML="Number 01 :   "+number1+"        "+"Number 02 :     "+number2+"       "+"Operator :     "+operator+"      = "+finall;
}


/*function calc(){
     let displayText = document.getElementById("displayText").value;
     let lbloutput = document.getElementById("lbloutput");
    let sum = eval(displayText);
    lbloutput.innerHTML= sum;
    alert(sum);

 }*/
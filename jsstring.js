
function charcoun () {
    let input1=String(document.getElementById("ip1").value)
    one=input1
    console.log(input1.length);
    
    let a=document.getElementById("a1")
    a.innerHTML = "There are" +" "+input1.length+" "+"characters."
    
}

function uc(){
    let input2 = String(document.getElementById("ip2").value)
    one=input2
    console.log(input2.toUpperCase());
    
    let a=document.getElementById("a2")
    a.innerHTML = input2.toUpperCase()
}

function lc(){
    let input3 = String(document.getElementById("ip3").value)
    one=input3
    console.log(input3.toLowerCase());
    
    let a=document.getElementById("a3")
    a.innerHTML = input3.toLowerCase()
}

function strt () {
    let input4=String(document.getElementById("ip4").value)
    one=input4
    let two=one.trim()
    console.log(input4.trim ());
    let a=document.getElementById("a4")
    a.innerHTML = "There are" +" "+input4.length+" "+"characters."+two.length+" "+"string count"
    
}

function srp(){
    let input5=String(document.getElementById("ip5").value)
    one=input5
    let input6= input5.replaceAll(String(document.getElementById("ip6").value) ,String(document.getElementById("ip7").value))
    two=input6
    console.log(input6);
    let a=document.getElementById("a5")
    a.innerHTML = input6
}


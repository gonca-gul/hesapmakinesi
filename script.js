
function insert(num) {
    
    document.form.text.value = document.form.text.value + num;
}
document.getElementsByClassName('result-panel')[0].onkeypress = function (e) {
    e = e || window.event; 
    var deger =e.key;
    if(degerKontrol(deger))
         return true;
    return false;
};

function result() {
    var exp = document.form.text.value;
    document.form.text.value=eval(exp);
    
}
function clean() {
    document.form.text.value="";
}

function  degerKontrol(deger){

if(deger=="*" || deger=="/" || deger=="+" || deger=="-"){
    return true;
}
if(deger>=0 && deger<=9){
    return true;
}
return false;
}

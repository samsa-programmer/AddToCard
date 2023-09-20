function a(){
    let select = document.getElementById('select').value;
    let rate = document.getElementById('rate').innerHTML;
    let total= select*rate;
    document.getElementById('rate2').innerHTML=total;
    document.getElementById('rate3').innerHTML=total;
}
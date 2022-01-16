var clothes = [];
function testData(){
    fetch('../data/clothes.json')
        .then(response => response.json())
        .then(data => clothes.push(data))
}

let printData  = function (){
    for(let i = 0; i<=clothes.length;i++){
        console.log(clothes[i]);
    }
}
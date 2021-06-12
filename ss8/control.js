//Bài 1
// const container = document.getElementById('list');
// for(let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML('afterbegin', `<li>${i}</li>`)
// }


// //Bài 2
// button1.addEventListener('click', function (e) {
// 	// let x = document.getElementById("button1").innerHTML="Jead";
//     console.log(e.target);
//     // hiển thị button
// });

// button2.addEventListener('click', function (e) {
//     console.log(e.target);
//     // Hiển thị button
// });

// input.addEventListener('keydown',function(e){
//     console.log(e.key);
//     // in ra gia trị nhập trong input
// });

//Bài 3

let x = document.getElementById("upper_btn");
console.log(x);
let y = document.getElementById("text1");
console.log(y);
let z = document.getElementById("innerHTML");
console.log(z);

HTMLInputElement

function upper(){
    console.log('upper it just clicker');
    console.log(`User Name: ${y.value}`);
    console.log(`User Name: ${y.value.toUpperCase()}`);
    z.innerHTML = `${y.value.toUpperCase()}`;
}

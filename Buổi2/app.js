// Bài 1
// 1.1.7 Số bắt đầu từ số 0 :
// for (let i=0; i<7; i++){
//     console.log(i);
// }

// // 1.2. n số bắt đầu từ 0, n nhập từ người dùng
// let n = prompt('Nhập n: ');
// for(let i=0; i<n; i++){
//     console.log(i);
// }

// 1.3 Dãy số bắt đầu từ số 3, kết thúc trước n, n nhâp từ người dùng
// let n1 = prompt('Nhập n: ');
// while(n1<3){
//     n1 = prompt('N phải lớn hơn 3, Nhập lại n:');
// }
//     for(let i=3; i<n1; i++)
//     console.log(i);

// 1.4. Dãy số bắt đầu từ c, kết thúc trước n, c và n là do người dùng nhập vào
// let c = prompt('Nhập số bắt đầu c: ');
// let n2 = prompt('Nhập số kết thúc n: ');
// while(n2<c){
//     alert("C phải nhỏ hơn N!")
//     c = prompt('Nhập lại số bắt đầu c: ');
//     n2 = prompt('Nhập lại số kết thúc n: ');
// }
//     for(let i=c; i<n2; i++)
//     console.log(i);

// 1.5. Dãy số bắt đầu từ c, kết thúc trước n, bước nhảy là s. Các biến c, n, s được nhập từ người dùng
// let c1 = prompt('Nhập số bắt đầu c:');
// let c11 = parseInt(c1);
// let n3 = prompt('Nhập số Kết thúc n');
// let n33 = parseInt(n3);
// let s = prompt('Nhập bước nhảy s');
// let ss = parseInt(s);
// while(c1>n3){
//     alert('n phải lớn hơn c');
//     c1 = prompt('Nhập lại số bắt đầu c:');
//     n3 = prompt('Nhập lại số Kết thúc n');
//     s = prompt('Nhập lại bước nhảy s');
// }
// for(let i = c11; i<n33; i+=ss){
//     console.log(i);
// }


// Bài 2. Viết chương trình tính toán và thông báo giai thừa của số n ( 1 * 2 * 3 * … *n),  n nhập từ người dùng
// let x = prompt('Input n: ');
// let n = parseInt(x);
// let giaithua = 1;
// if(n == 0){
//     alert(`${n}! = ${giaithua}`);
// }else{
//     for (let i=1; i<=n; i++){
//         giaithua = giaithua * i;
//     }
//     alert(`${n}! = `+ giaithua);
// }

// Bài 3: Viết chương trình kiểm tra thông báo xem người dùng có đủ tuổi xem nội dung 14+ hay không :D
// let old = prompt('How old are you?');
// let oldnumber = parseInt(old);
// if(oldnumber < 14){
//     alert('You are not old enough to view this content');
// }else{
//     alert('Enjoy!');
// }

//Bài 4: Viết chương trình kiểm tra số nhập vào là số chẵn hay lẻ
// let Number1 = prompt('x =');
// if(Number1 % 2 !== 0){
//     alert(`${Number1} is an odd number`);
// }else{
//     alert(`${Number1} is an even number`);
// }

//Bài 5 đăng nhập
// let username = "";
// let password = "";
// while (true){
//     username = prompt('Nhập username: ');
//     password = prompt('Nhập password: ');
//     if(username !== "mindx" && password !== "codeforthechane"){
//         alert('sai');
//         alert('sai');
//     }else{
//         alert('đang nhập thànhhccong');
//         break;
//     }
// }
n1 = prompt("nhập n: ");
n = parseInt(n1);
for (let i=0 ;i<=n; i++){
    console.log(i);
}
let i = 10;
console.log(i);
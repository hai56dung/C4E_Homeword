// Bài 1: Một cửa hàng quần áo có 3 loại áo là “Jean”, “T-Shirt”, “Socks”. Viết chương trình giả lập
// một phần mềm quản lý shop, hỏi và thực hiện yêu cầu của người dùng như sau.
// let items = ["Jeans","T-Shirt","Sock"];
// let isLoop = true;
// while (isLoop) {
//     let option = prompt("Hi there, welcome to shop admin panel, what do you want (C, R U D)?");
//     // if(!option){

//     //     break;
//     // }
//     switch (option.toUpperCase()){
//         case "C": {
//         let addItem = prompt("Enter the name of the new item");
//             items.push(addItem);
//             alert('Done');        
//             break;
//         }

//         case "R": {
//             console.log("The Current items are: ");
//             for(let i = 0; i<items.length; i++){
//                 console.log(`${i+1}. ${items[i]}`);
//             }
//             break;
//         }

//         case "U": {
//             let updateItem = prompt("Enter the poisition you want to update");
//             let updateTtemNumber = parseInt(updateItem);
//             let nameChange = prompt("Enter the new name");
//             items[updateTtemNumber] = nameChange;
//             alert("Done");
//             break;
//         }

//         case "D": {
//             let numberDelete = prompt("Enter the position you want to delete");
//             items.splice(numberDelete,1);
//             alert("Done");
//             break;
//         }


//         default: {
//             // isLoop = false;
//             alert('Not supported');
//             break;
//         }
//     }
// }

//Bài 2. Khởi tạo mảng 5 phần tử như sau: 
//      let arr = [3, 4, 6, -9, 10, -88, 2];

//2.1 Hiện thị tổng của các phần tử trong mảng
// let arr = [3, 4, 6, -9, 10, -88, 2];
// let add = 0;
// for (let i = 0; i < arr.length; i++){
//     add += arr[i];
// }
// console.log(add);

// //2.2 Hiện thị số các số dương trong mảng
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         count++;
//     }
// }
// console.log(count);
// //2.3 Yêu cầu người dùng nhập một số. Kiểm tra số đó có thuộc mảng arr hay không. Nếu không thông báo không tìm thấy, nếu có hãy thông báo ra chỉ số của phần tử đó

// let check = prompt('Enter a number');
// let checkNumber = parseInt(check);
// if(arr.indexOf(checkNumber) === -1){
//     alert(`${checkNumber} is NOT FOUND in my array `);
// }else{
//     alert(`${checkNumber} is FOUND in my array ${arr.indexOf(checkNumber)}`);
// }

// Bài 3. Thông thường, với người dùng bình thường không hiểu về cú pháp khai báo mảng, để nhập dãy số người ta thường sử dụng chuỗi với các phần tử được 
// phân cách bởi một dấu vào đó ví dụ dấu cách, dấu phẩy hay dấu chấm phẩy. Nhiệm vụ của chúng ta là cần tách được chuỗi đó thành mảng.
// Ví dụ từ chuỗi let s = “1 2 3 4 5 6” thành mảng a = [1, 2, 3, 4, 5, 6]
// Hãy tìm cách thực hiện thao tác trên.
// Gợi ý: google với từ khoá split string javascript.
// let s = "1 2 3 4 5 6";
// let a = s.split(" ");
// console.log(a);

// //Bài 4. Dựa vào cách làm của bài 3, viết một chương trình hỏi người dùng người dùng nhập một dãy số, phân tách nhau bởi dấu , thông báo ra màn hình số nhỏ nhất trong dãy số đó
// // (Nếu có vấn đề với dấu phẩy, hãy xem link gợi ý cuối bài)
// let r = prompt('Enter a squence of number, swoarated by","');
// let x = r.split(",");
// // let d = parseInt(x);
// let smallest = x[0];
// for (let i = 1; i < x.length; i++){
//     if(smallest > x[i]){
//         smallest = a[i];
//     }
// }
// alert(`${smallest} is smallest`);


// Bài 5. Viết một chương trình yêu cầu người dùng nhập một dãy tên người, phân tách nhau bởi dấu phẩy. Tạo một mảng mới chứa những tên đã nhập, mỗi tên đều viết hoa toàn bộ các chữ cái
// let nameds = prompt('Nhập danh sách: ');
// let names = nameds.split(",");
// let namehoa = nameds.toLocaleUpperCase();
// alert(namehoa);


//Bài 6. Viết một chương trình yêu cầu người dùng nhập dãy số, phân tách nhau bởi dấu phẩy. Tạo một mảng mới chỉ bao gồm các số lẻ
let inputNumber = prompt('Nhập dãy số');
let x = inputNumber.split(",");
let oddNumber = [];
for(let i = 0; i < x.length; i++){
    if(x[i] % 2 == 1){
        oddNumber.push(x[i]);
    }
}
console.log(oddNumber)
alert(oddNumber.join(', '));
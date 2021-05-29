// Bài 1. Khởi tạo một object mô tả một quyển từ điển, với property là keyword, value là giải nghĩa của từ đó, giá trị khởi tạo từ bảng sau
// let dictionary = {debug: "The process of figuring out why your program has a certain error and how to fix it",
//                   done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
//                   defect: "The formal word for 'error'",
//                   pm: "The short version  of Project Manager, the person in charge of the final result of a project",
//                   uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"};
// let hello = alert('Hi there, this is dev dictionary');
// let Nhap = "";
// while(true){
//     Nhap = prompt('Enter a keyword');
//     if(!Nhap){
//         break;
//     }
//     else if(!dictionary[Nhap]){ 
//         alert(`We could not find your word ${Nhap}`);
//         dictionary[Nhap] = prompt(`We could not find your word: ${Nhap}, leave your explanation`);
//         console.log(dictionary);
//     }else{
//         alert(`${Nhap} \n${dictionary[Nhap]}`);
//     }
// }

//Bài 2. Bài này chúng ta sẽ học cách sử dụng vòng for trong object nhé. Mọi người làm dần từng phần sẽ hiểu tác dụng của vòng for này.
// Chạy đoạn code dưới đây và trả lời câu hỏi
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
//     };
//     for (let x in product) {
//     console.log(`${x}: ${product[x]}`);
//     }
//    // In ra property 

// Bài 3. Khởi tạo mảng products chứa danh sách các product, mỗi product bao gồm name, price, brand, category, color. Giá trị khởi tạo dựa vào bảng sau
let smartPhone = [
    {Name: `Xiaomi Portable Charger 20000mah`, Price: 428,   Brand: `Xiaomi`, Color: `White`, Category: `Charger`, Providers: [`Phukienzero`, `Dientuccc`]},
    {Name: `VSmart Active 1`,                 Price: 5487,  Brand: `VSmart`, Color: `Black`, Category: `Phone`, Providers: [`Tgdd`,`Ddghn`, `VhStore`]},
    {Name: `IPhone X`,                       Price: 21490, Brand: `Apple`,  Color: `Gray`,  Category: `Phone`, Providers: `Tgdd`},
    {Name: `Samsung Galaxy A9`,               Price: 8490,  Brand: `SamSung`,Color: `Black`, Category: `Phone`, Providers: `Tgdd`},
]
for(let x in smartPhone){
    let xint = parseInt(x);
    console.log(`#${xint+1} Name: ${smartPhone[x].Name}\nPrice: ${smartPhone[x].Price}`);
}
let position = prompt("Enter the position: ");
let positionNumber = parseInt(position);
for (let x in smartPhone){
    let xint = parseInt(x);
    xint = positionNumber;
    console.log(`Name: ${smartPhone[positionNumber-1].Name}\nPrice: ${smartPhone[positionNumber-1].Price}\nBrand: ${smartPhone[positionNumber-1].Brand}\nColor: ${smartPhone[positionNumber-1].Color}\nCategory: ${smartPhone[positionNumber-1].Category}`);
}
let InputCategory = prompt('Enter your category');
for(let x in smartPhone){
    if(smartPhone[x].Category !== InputCategory && smartPhone[x].Category.toUpperCase()){
        console.log("");
    }else{
        console.log(`${smartPhone[x].Name}\n${smartPhone[x].Price}`);
    }
}
let InputProviders = prompt("Enter the Providers");
for (let x in smartPhone){
    if (smartPhone[x].Providers.indexOf(InputProviders) === -1){
        
    }else{
        console.log(smartPhone[x]);
    }
}
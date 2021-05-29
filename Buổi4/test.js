// Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()

// let str_input = "program";
// let upSizeDown_str_input = "";
// for(let i = str_input.length - 1; i >= 0 ; i--){
//     upSizeDown_str_input += str_input[i];
// }
// console.log(upSizeDown_str_input);


// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
// Đầu vào: str
// Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// Ví dụ
// Cho "this is Test"; In ra "This is Test"
// Cho "hello a"; In ra "Hello A”
// let str_input1 = prompt('Nhập thường');
// let up_str_input = str_input1.toLocaleUpperCase();
// alert(up_str_input);


// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// let Arr=["one","two","three","four","five","four","six","one","seven","two"];
// let arrNotDuplicate = [];
// for (let i = 1; i <= Arr.length ; i++){
//     for (let j = 0; j < i; j++){
//         if (Arr[i] == Arr[j]){
//             for(let k = i; k < Arr.length; k++){
//                 Arr[k] = Arr[k + 1];
//             }
//         }
//     }
// }
// console.log(Arr);


// Bài 4 : Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)
// let Staff = [
//     {Name:"MindX1", Age:23, Salary:300000000, Position:"Giảng Viên"},
//     {Name:"MindX2", Age:24, Salary:200000000, Position:"Trợ Giảng"},
//     {Name:"MindX3", Age:23, Salary:400000000, Position:"Quản Lý"}
// ]
// let isLoop = true;
// while (isLoop) {
//     let staffNew = {};
//     let option = prompt("Chào bạn, bạn muốn thao tác gì?");
//     if(!option){
//         break;
//     }
//     if(option == "Create") {
//         let addNameStaff = prompt("Enter the name of the new Staff");
//         staffNew.Name = addNameStaff;
//         let addAgeStaff = prompt("Enter the name of the new Staff");
//         staffNew.Age = addAgeStaff;
//         let addSalaryStaff = prompt("Enter the name of the new Staff");
//         staffNew.Salary = addSalaryStaff;
//         let addPositionStaff = prompt("Enter the name of the new Staff");
//         staffNew.Position = addPositionStaff;
//         Staff.push(staffNew);
//             alert('Done');        
//         }else if(option == "Read"){
//             console.log(Staff);
//         }else if(option == "Update"){
//             let a = prompt("Nhập nhân viên số");
//             parseInt(a);
//             let b = prompt("Nhập cần thêm position");
//             for(a = 0; a <= Staff.length; a++){
//                 Staff[a].Position = b;
//             }
//         }else if(option == "Delete"){
//             x = prompt("Muốn xóa nhân viên số mấy");
//             Staff.splice(x,1);
//             alert("Done");
//         }else{
//             alert("Không hỗ trợ");
//         }
// }


// Bài 5 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)


let nmonth = prompt("Nhập tháng");
let month = parseInt(nmonth);
let nyear = prompt("Nhập năm");
let year = parseInt(nyear);
let nday = prompt("Nhập Ngày: ");
let day = parseInt(nday);
    switch (month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:{
                if (day > 0 && day <= 31){
                    alert('Hợp lệ');
                    if(day == 31 && month !== 12){
                        alert(`1 / ${month+1} / ${year}`);
                    }else if(day == 31 && month ==12){
                        alert(`1 / 1 / ${year+1}`);
                    }else if(day !== 31 && month !== 12){
                        alert(`${day+1} / ${month} / ${year}`);
                    }
                }
                else alert('Không hợp lệ'); 
                break;
        }
            case 4:
            case 6:
            case 9:
            case 11: {
                if (day > 0 && day <= 30){
                    alert("Hợp lệ");
                    if(day == 30){
                        alert(`1 / ${month+1} / ${year}`);
                    }else if(day !== 30){
                        alert(`${day+1} / ${month} / ${year}`);
                    }
                }else alert("Không hợp lệ");
                break;
            }
                
            case 2:{
                if (year % 4 == 0 && day <=29)
                {
                    alert("Hợp lệ");
                    if(day == 29){
                        alert(`1 / ${month+1} / ${year}`);
                    }else if(day !== 29){
                        alert(`${day+1} / ${month} / ${year}`);
                    }
                }
                else if(year % 4 == 1 && day <=28)
                {
                    alert("Hợp lệ");
                    if(day == 28){
                        alert(`1 / ${month+1} / ${year}`);
                    }else if(day !== 28){
                        alert(`${day+1} / ${month} / ${year}`);
                    }
                }else alert("không hợp lệ");
                break;
            }
            default: {
                alert("Không hợp lệ");
                break;
            }
            
    }
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)


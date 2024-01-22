// 1)

// let number = "0";{
//     if (number > 0) {
//         console.log("დადებითია");
//     } else if (number < 0) {
//         console.log("უარყოფითია");
//     } else {
//         console.log("არც ერთი");
//     }
// }




// 2)

// function calculator(num1, num2, operator) {
//     let result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//     }
// }




// 4)

// let Name = "";
// let lastName = "";
// let email = "";
// let password = "";
// let phoneNumber = "";

// if (Name !== "" && lastName !== "" && email === "" && password.length > 8) {
//     console.log ("თქვენ დარეგისტრირებული ხართ");
// } else {
//     console.log ("გთხოვთ გადაამოწმოთ შეტანილი მონაცემები")
// }

let firstname = prompt("Enter Your Firstname:")
let lastname = prompt("Enter Your Lastname:")
let email = prompt("Enter Your Email:")
let password = prompt("Enter Your Password:")
let phonenumber = prompt("Enter Your Phone Number:")
let User = `${firstname + " " + lastname + " " + email + " " + password + " " + phonenumber}`


if (firstname.length !== 0 && lastname.length !== 0 && 
   (email !== 0 || phonenumber !== 0) && password !== 8){
document.write("you have successfully registered!!   " )
document.write(User)
}


    else{
        document.write("please enter valid info!!")
        
    }
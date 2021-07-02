/**
 * (cơ chế hoisting là có thể truy cập biến trước khi định nghĩa biến,gán giá trị cho biến)
 * Khai báo biến
 * - khai báo biến vs let và const
 * - so sánh let const và var
 *      +var: có hoisting, phạm vi là function scope
 *      +let, const: k có hoisting, block scope
 * - nên dùng cái nào trong trường hợp nào
 *      +var : khi brower không hõ trợ let const (IE)
 *      +let: khi cần re-assign giá trị ( gán lại giá trị)
 *      + const : khi k cần gán lại giá trị
 */

// khai báo var

// console.log(fullName); // có thể gọi biến ra trước khi đặt giá trị cho nó nhưng là undefined(Đã tồn tại nhưng chưa có giá trị)
// fullName = "Van Dieu Hien";
// console.log(fullName);
// var fullName = "Van Minh Thuan"; //(var có hoisting)
// fullName = "Van Con Cho";
// console.log(fullName);

// function showErrorWithVar() {
//   var isError = true;
//   var error = "";

//   if (isError) {
//     error = "somthing went wrong!";
//     console.log(error);
//   }
//   console.log(error);
// }
// // showErrorWithVar là function scope
// showErrorWithVar();

// **********************************

//khai báo let
// console.log(age)=> lỗi => k có cơ chế hoisting, k nằm trong global scope
// let age = 18;
// // let age=20; // has been declared khai báo trùng
// console.log(age);

// function showErrorWithLet() {
//   let isError = true;
//   let error = "";
//   if (isError) {
//    let error = "somthing"; // nếu dùng let khai báo error 1 lần nữa trong hàm if( thì giá trị somthing chỉ giới hạn sử dụng trong hàm if,còn ra bên ngoài sẽ là 1 error khác)
//    //trường hợp k dùng let mà gán error cho somthin thì phạm vi sử dụng sẽ là trong function showError
//     console.log(error);
//   }
//   console.log(error);
// }
// showErrorWithLet();

// **************************************

// khai báo const
// nó là hằng số, chỉ có 1 giá trị, sẽ k dc gán bất kì giá trị nào khác
//bắt buộc phải gán giá trị khi khai báo

// const birthYear = 1996;
// console.log(birthYear);

// function showErrorWithConst() {
//   const isError = true;
//   const error = "";
//   if (isError) {
//    const error = "somthin";
//     console.log(error);
//   }
//   console.log(error);
// }
// showErrorWithConst();

// *****************************

/** function
 * - arrow function
 * - normal function(declaration, expression)
 * - so sánh(cú pháp,con trỏ this)
 */

//expression function :
// const calcuAgeNormal = function (birthYear) {
//   console.log(this);
//   return 2021 - birthYear;
// };
// calcuAgeNormal();

//arrow function:
//- k định nghĩa bối cảnh thực thi (this) của riêng nó
//- k qan tâm đc thực thi trong ngữ cảnh nào, giá trị this của arrow = this của outer function
//- nếu k có outer function thì this=window(global object trên window)
//- k dùng arrow function để làm constructor function và làm method của object
// const calcuAgeArrow = (birthYear) => {
//   console.log(this);
//   console.log(2021 - birthYear);
// };
// calcuAgeArrow(1996);

// const calcuAgeArrowShort = (birthYear) => 2021 - birthYear;
// console.log(calcuAgeArrowShort(1996));

const student = {
  name: "Thuan",
  birthYear: 2000,

  calcuAgeNormal: function () {
    console.log(this);
    console.log(2021 - this.birthYear);

    // const _this=this; cách 1

    // const checkAgeNormal = function () {
    //   console.log("checkAgeNormal " + this.birthYear);
    //   if ((2021-this.birthYear >= 18)) {
    //     console.log("you ok");
    //   } else {
    //     console.log("you not ok");
    //   }
    // }.bind(student) //cách 2 : .bind(student)
    // checkAgeNormal();
    const checkAgeArrow = () => {
      console.log("checkAgeNormal " + this.birthYear);
      if (2021 - this.birthYear >= 18) {
        console.log("you ok");
      } else {
        console.log("you not ok");
      }
    };
    checkAgeArrow();
  }, // cách 3 : dùng arrow , lúc này this của arrowF sẽ bằng cái outer function của nó bên ngoài là checkAgeNormal, lúc này this của outer là this của student. nên cuối cùng this của arrF = this của student

  // k dùng arrow function làm method của object
  calcuAgeArrow: () => {
    console.log(this);
    console.log(2021 - this.birthYear);
  },
};
// student.calcuAge();
// student.calcuAgeNormal();

// ******************************
//default parameter

const withoutDefaultParam = (typeOfUsers) => {
  if (typeOfUsers === "user") {
    console.log("Redirect to user page");
  } else {
    console.log("Redirect to admin page");
  }
};

withoutDefaultParam("user"); //=> true
//**** */
const withDefaultParam = (typeOfUsers = "user") => {
  if (typeOfUsers === "user") {
    console.log("Redirect to user page");
  } else {
    console.log("Redirect to admin page");
  }
};
withDefaultParam("admin"); //=> false

//****************************************** */

// destructuring: phá hủy
// - Destructure array
// - Destructure object

// with array
//- without destructuring

// const students = ['Luong','Hien','Thuan']
// const luong = students[0];
// const thuan = students[2]
// console.log(luong,thuan);

// - with destructuring

// const students = ['Luong','Hien','Thuan']
// const [luong,hien,thuan] = students;
// // const [luong,,thuan] = students;
// console.log(luong,thuan,hien);

//with object
//without destructuring

// const _student = {
//   fullName: "Thuan",
//   age: 25,
//   class: "BC12",
// };

// const fullName = _student.fullName;
// const age = _student.age;
// console.log(fullName, age);

//with destructuring
// const _student = {
//   fullName: "Thuan",
//   age: 25,
//   class: "BC12",
// };
// const { fullName, class: classIT } = _student;

// console.log(fullName, classIT);

//******************************** */
//template string

// const fullName = "Thuan Minh";
// const str = "My name is " + fullName;
// const templateStr = `My name is ${fullName}`;
// console.log(templateStr);

/************** */
//enhanced object literals (shorthand syntax) :cú pháp
const age = 25;
const person = {
  fullName: "Thuan",
  age,

  calcuAge() {
    return 2021 - this.age;
  },
};
console.log(person);

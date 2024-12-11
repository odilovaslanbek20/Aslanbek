// let arr = [12, 23, 45, 75]
// let arr1 = [45, 82, 96, 24]
// let npm = []

// let qiymat = arr[0]+arr1[0]
// let qiymat1 = arr[1]+arr1[1]
// let qiymat2 = arr[2]+arr1[2]
// let qiymat3 = arr[3]+arr1[3]


// let ddd = npm.concat(qiymat,qiymat1,qiymat2,qiymat3)
// console.log(ddd);


// let mas = [80,26,266,99]
// let son = mas.reverse()
// console.log(son);


// let A = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let mainDiagonal = [];
// let secondaryDiagonal = [];
// let n = A.length;

// for (let i = 0; i < n; i++) {
//     mainDiagonal.push(A[i][i]);         // Asosiy diagonal
//     secondaryDiagonal.push(A[i][n - 1 - i]); // Qo'shimcha diagonal
// }

// console.log("Asosiy diagonal:", mainDiagonal); // [1, 5, 9]
// console.log("Qo'shimcha diagonal:", secondaryDiagonal); // [3, 5, 7]

// let str = "Aslanbek";
// let str1 = "Odilov";

// console.log(str + " " + str1);


const none1 = document.querySelector(".container");
const none = document.querySelector(".cursor");
none1.addEventListener("mousemove", (e) => {
 none.style.left = e.clientX + "px";
 none.style.top = e.clientY + "px";
})
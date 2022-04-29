//1
//first sol:
// function convertFunc(obj){
//     let arr=[];
//     // arr = Object.entries(obj);

//     arr = Object.keys(obj).map(key => [key, obj[key]]);
//     console.log(arr);
// }
// //second sol:
// function convertFunc(obj){
//     let arr=[];
//     arr = Object.entries(obj);
//     console.log(arr);
// }
// convertFunc({a:1, b:2});


//2
// function detectWord(str){
//     //we can use line 23 instead of line 24
//     // str = str.split("");
//     str = [...str];
//     let res = [];
//     res = str.filter(char => {
//         if (char != char.toUpperCase()){
//             res.push(char);
//             return res;
//         }
//     })
//     res = res.join("");
//     console.log(res);
// }
// detectWord("UcUNFYGaFYFYGtNUH");


//3
// first sol:
// function isEqual(obj1, obj2) {
//   let isTrue = true;
//   for (let key in obj1) {
//     if (obj1[key] != obj2[key]) {
//       isTrue = false;
//     }
//   }
//   console.log(isTrue);
// }

// //second sol:
// function isEqual(obj1, obj2){
//         return console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
// }

// let a = {
//   name: "Benny",
//   phone: "3325558745",
//   email: "benny@edabit.com",
// };

// let b = {
//   name: "Jason",
//   phone: "9853759720",
//   email: "jason@edabit.com",
// };
// isEqual(a, b);


//4
// function getStudentTopNotes(arr) {
//   let res = arr.map(function (item) {
//     //first sol:
//     // if (item.notes.length == 0){
//     //     return 0;
//     // }
//     // return Math.max(...item.notes);

//     //second sol:
//     return Math.max(...item.notes, 0);
//   });
//   console.log(res);
// }

// getStudentTopNotes([
//   {
//     id: 1,
//     name: "Jacek",
//     notes: [5, 3, 4, 2, 5, 5],
//   },
//   {
//     id: 2,
//     name: "Ewa",
//     notes: [2, 3, 3, 3, 2, 5],
//   },
//   {
//     id: 3,
//     name: "Zygmunt",
//     notes: [2, 2, 4, 4, 3, 3],
//   },
// ]);


//5
// let flattenedExpectNull =([1,0,[2,[[3]],null,14],[null],[15],'hi',''])
// flattenedExpectNull=flattenedExpectNull.flat(Infinity).filter(i => i != null )
// console.log(flattenedExpectNull);

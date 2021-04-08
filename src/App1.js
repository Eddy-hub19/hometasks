// import React, { useState } from "react";

// function App() {
//   const [arr, changeArr] = useState([
//     {
//       id: 1,
//       title: "title1",
//     },
//     {
//       id: 2,
//       title: "title2",
//     },
//     {
//       id: 3,
//       title: "title3",
//     },
//   ]);
//   // Для того,щоб не повторювати та скоротити код ми робим те,що показано в низу!

//   // const removeFirst = () => {
//   //   const newArr = [...arr];
//   //   newArr.shift();

//   //   changeArr(newArr);
//   // };

//   // const removeLast = () => {
//   //   const newArr = [...arr];
//   //   newArr.pop();

//   //   changeArr(newArr);
//   // };

//   const [itemsToHide, setItemsToHide] = useState([]);

//   const filteredArr = arr.filter((el) => !itemsToHide.includes(el.id));

//   //itemToRemove is 'last' or 'first'
//   const handleArrChange = () => {
//     const itemToRemove = filteredArr[0];

//     if (!itemToRemove) return;

//     const clone = [...itemsToHide];
//     clone.push(itemToRemove.id);
//     setItemsToHide(clone);
//   };

//   const onRevert = () => {
//     setItemsToHide([]);
//   };

//   const [isOk, setIsOk] = useState(false);

//   return (
//     <div className={`App ${isOk ? "red" : "ed"}`.trim()}>
//       <h2
//         onClick={() => {
//           setIsOk(!isOk);
//         }}
//       >
//         {isOk ? "Ed" : "Sekan"}
//       </h2>
//       <button onClick={onRevert}> revert </button>
//       <ul>
//         {filteredArr.map((el) => (
//           <li key={el.id}>
//             {el.title} -
//             <button
//               onClick={() => {
//                 handleArrChange(el);
//               }}
//             >
//               remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

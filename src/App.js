import React, { useState } from "react";
// 1 відмалювати список карточок базуючись на якомусь створеному вами масиві
// створити окрему кнопку, яка буде видаляти поточний перший елемент (або останній)
// якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази, то на екрані жодна карточка не має відмалюватись
// (кнопки повернення до початкового стану не треба

// 1. Змінити,щоб видаляло з кінця
// 2. Додати кнопку повернення всіх юзерів 


const items = [
  {
    name: "Ed",
    age: 20,
  },
  {
    name: "Sanya",
    age: 19,
  },
  {
    name: "Taras",
    age: 18,
  },
];

function App() {
  const[users, changeUsers] = useState(items)

const removeUsers = () => {
  let removed = users.shift();
  let newArr = users.filter(item => item.name != removed.name)
  changeUsers(newArr)
}

  return (
    <div>
      <h1>Hello Users</h1>
      <ul>
        {users.map((item) => {
          return <li key={item.name}>{item.name} {item.age}</li>;
        })}
      </ul>
      <button onClick={removeUsers}>remove</button>
    </div>
  );
}

export default App;

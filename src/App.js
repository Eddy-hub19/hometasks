import React, { useState } from "react";
// 1 відмалювати список карточок базуючись на якомусь створеному вами масиві
// створити окрему кнопку, яка буде видаляти поточний перший елемент (або останній)
// якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази, то на екрані жодна карточка не має відмалюватись
// (кнопки повернення до початкового стану не треба

function App() {
  let [counter, setCounter] = useState(0);
  let [user, setUser] = useState({ name: "vasya", age: 23 });

  const incCounter = () => {
    counter++;
    console.log(counter);
    setCounter(counter);
  };

  const incAge = () => {
    user.age++;
    console.log(user);
    setUser({ ...user });
  };

  return (
    <div>
      <div>
        {counter} - <button onClick={incCounter}>increment counter</button>
      </div>
      <div>
        {user.name} - {user.age}
        <button onClick={incAge}> inc age </button>
      </div>
    </div>
  );
}

export default App;

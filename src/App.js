// 1. відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку,
// яка буде видаляти поточний перший елемент (або останній)
// якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази,
// то на екрані жодна карточка не має відмалюватись
// (кнопки повернення до початкового стану не треба)

import "./logo.svg";
import React, { useState } from "react";
import {
  BtnRemoveCard,
  Button,
} from "./components/Card/buttons/Buttons/Button";
import { CardItem } from "./components/Card/Card";

function App() {
  const RemoveCard = () => {
    console.log("click");
  };

  const BtnRemoveCard = () => {
    return (
      <div className="btn">
        <button onClick={RemoveCard}>Remove</button>
      </div>
    );
  };

  return (
    <div className="App">
      <Button key="1" />
      <CardItem text="ITEM" name="Black tea" cost="$10" />
      <Button key="2" />
      <CardItem text="ITEM" name="White Tea" cost="$25" />
      <Button key="3" />
      <CardItem text="ITEM" name="Red Tea" cost="$21" />
      <Button key="4" />
      <CardItem text="ITEM" name="Green Tea" cost="$15" />
      <BtnRemoveCard key="5" />
    </div>
  );
}

export default App;

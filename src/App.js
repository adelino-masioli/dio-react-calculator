import Button from "./components/Button";
import Input from "./components/Input";

import { useState } from "react";
import { Container, Content, Result, ResultReset, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber(`${currentNumber}+`);
      setOperation("+");
    } else {
      const splitOpetarion = currentNumber.split("+")[1];
      const sum = Number(firstNumber) + Number(splitOpetarion);

      handleOnClear();
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber(`${currentNumber}-`);
      setOperation("-");
    } else {
      const splitOpetarion = currentNumber.split("-")[1];
      const sub = Number(firstNumber) - Number(splitOpetarion);

      handleOnClear();
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber(`${currentNumber}/`);
      setOperation("/");
    } else {
      const splitOpetarion = currentNumber.split("/")[1];
      const sub = Number(firstNumber) / Number(splitOpetarion);

      handleOnClear();
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber(`${currentNumber}x`);
      setOperation("*");
    } else {
      const splitOpetarion = currentNumber.split("x")[1];
      const sub = Number(firstNumber) * Number(splitOpetarion);

      handleOnClear();
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "/":
          handleDivideNumbers();
          break;
        case "*":
          handleMultiplyNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Result>
          <ResultReset>
          <Button border={false} label="c" onClick={handleOnClear} />
          </ResultReset>
          <Input value={currentNumber} />
        </Result>
        <Row style={{ marginBottom:'6px' }}>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row style={{ marginBottom:'6px' }}>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>

        <Row style={{ marginBottom:'6px' }}>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="/" onClick={handleDivideNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={handleEquals} />
          <Button label="." />
          <Button label="x" onClick={handleMultiplyNumbers} />
        </Row>

      </Content>
    </Container>
  );
};

export default App;

import { useState } from "react";

const members = [
  { member: "you", value: 0 },
  { member: "your friend", value: 0 },
];

function App() {
  const [satisfactions, setsatisfactions] = useState(members);
  const [bill, setbill] = useState(100);
  const tip =
    satisfactions.reduce((accumulator, item) => accumulator + item.value, 0) /
    satisfactions.length /
    100;

  function handleSatisfaction(index, newvalue) {
    console.log(index, newvalue);
    setsatisfactions(
      satisfactions.map((item, i) =>
        i === Number(index) ? { ...item, value: Number(newvalue) } : item
      )
    );
  }
  return (
    <>
      <BillForm billValue={bill} onsetbillLocal={(x) => setbill(x)} />
      {satisfactions.map((item, i) => {
        return (
          <Satisfaction index={i} onHandleSatisfaction={handleSatisfaction}>
            How did {item.member} like the service?
          </Satisfaction>
        );
      })}
      <Result bill={bill} tip={tip} />
    </>
  );
}

function BillForm({ billValue, onsetbillLocal }) {
  let billValueLocal = billValue;
  return (
    <form>
      How much was the bill?
      <input
        type="text"
        value={billValue}
        onChange={(e) => onsetbillLocal((x) => Number(e.target.value))}
      />
    </form>
  );
}

function Satisfaction({ children, onHandleSatisfaction, index }) {
  return (
    <form>
      {children}
      <select onChange={(e) => onHandleSatisfaction(index, e.target.value)}>
        <option value="0">Bad (0%)</option>
        <option value="5">Ok (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </form>
  );
}

function Result({ bill, tip }) {
  return (
    <>
      {bill > 0 && (
        <h1 sytle={{}}>
          You pay ${bill + bill * tip} (${bill} + ${bill * tip})
        </h1>
      )}
    </>
  );
}

export default App;

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div className="steps">
      Hello React!
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">{messages[0]}</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

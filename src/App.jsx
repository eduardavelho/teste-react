import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline border-2 border-red-600 bg-blue-700 md:bg-red-700 p-8">
        Hello world!
      </h1>
      <button className="uppercase bg-green-500 md:bg-red-500 p-2 rounded-lg">
        Me clique-me
      </button>
      <form action="https://getform.io/f/bwnwedva" method="POST">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="message" />
        <input
          type="hidden"
          name="_gotcha"
          style={{ display: "none !important" }}
        />
        <input
          type="checkbox"
          name="subscribe"
          defaultValue="yes"
          defaultChecked=""
        />
        <input type="hidden" name="subscribe" defaultValue="no" />
        <input
          type="radio"
          name="gender"
          defaultValue="male"
          defaultChecked=""
        />
        <input type="radio" name="gender" defaultValue="female" />
        <input type="radio" name="gender" defaultValue="other" />
        <select name="work-experience">
          <option value="one-year">0-1 years</option>
          <option value="one-five-years">1-5 years</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;

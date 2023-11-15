import ListItems from "./components/ListItems";
import Button from "./components/Button";
import richestPeople from "./data";

const list = richestPeople
.map((a) => ({ value: a, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map((a, index) => ({ name: a.value, id: index + 1 }));

function App() {

  return (
    <>
      <h1>10 richest People</h1>
      <p>Drag and Drop the items into their corresponding spots</p>
      <ListItems data={list}/>
      <Button />
    </>
  );
}

export default App;

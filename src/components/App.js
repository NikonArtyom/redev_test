import '../App.css';
import Number from './Todo/props/Number';
import String from './Todo/props/String';
import Boolean from './Todo/props/Boolean';
import Object from './Todo/props/Object';
import Array from './Todo/props/Array';
import Function from './Todo/props/Function';

function App() {

  const obj = {
    name: "Artyom",
    age: 24,
  };
  const arr = [1, 2, 3];
  const func = (str) => `Hello ${str}`;

  return (

    <div className="App">

      <Number num={12345} />
      <String str={'Hello'} />
      <Boolean isTrue={true} />
      <Object obj={obj} />
      <Array arr={arr} />
      <Function func={func("+ your name")} />

    </div>
  );
}

export default App;

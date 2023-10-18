import '../App.css';
import Number from './Todo/Props/Number';
import String from './Todo/Props/String';
import Boolean from './Todo/Props/Boolean';
import Object from './Todo/Props/Object';
import Array from './Todo/Props/Array';
import Function from './Todo/Props/Function';
import Counter from './Todo/State/Counter';
import Show from './Todo/State/Show'
import Input from './Todo/State/Input';
import Color from './Todo/State/Color';

function App() {

  const obj = {
    name: "Artyom",
    age: 24,
  };
  const arr = [1, 2, 3];
  const func = (str) => `Hello ${str}`;

  return (

    <div className="App">

      <div className='props'>
        <Number num={12345} />
        <String str={'Hello'} />
        <Boolean isTrue={true} />
        <Object obj={obj} />
        <Array arr={arr} />
        <Function func={func("+ your name")} />
      </div>

      <div className='state'>
        <Counter />
        <Show />
        <Input />
        <Color />
      </div>

    </div>
  );
}

export default App;

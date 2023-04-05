import {useState} from 'react';
import './App.css'

let arr =['rock','paper','scissor'];
function App() {
  let [option,setoption] = useState('')
  function onchangehandler(e){
    setoption(e.target.value)}


  function compselect(e){
    e.preventDefault()
    let random =Math.floor(Math.random() *3)
    console.log(random);
    console.log( document.getElementsByClassName('h2')[0]);
     document.getElementsByClassName('h2')[0].innerHTML = `computer selected ${arr[random]}`

    if (arr[random] == option.toLowerCase()){
     document.getElementsByClassName('result')[0].innerHTML = `draw`
     console.log( document.getElementsByClassName('result')[0]);

    }
    else if(arr[random]=='rock'&& option.toLowerCase() =='paper'){
     document.getElementsByClassName('result')[0].innerHTML = `you won`

      
    }
    else if(arr[random]=='paper'&& option.toLowerCase() =='scissor'){
     document.getElementsByClassName('result')[0].innerHTML = `you won`
      
    }
    else if(arr[random]=='scissor'&& option.toLowerCase() =='rock'){
     document.getElementsByClassName('result')[0].innerHTML = `you won`
      
    }
    else if(arr[random]=='rock'&& option.toLowerCase() =='scissor'){
     document.getElementsByClassName('result')[0].innerHTML = `you lost`
      
    }
    else if(arr[random]=='scissor'&& option.toLowerCase() =='paper'){
     document.getElementsByClassName('result')[0].innerHTML = `you lost`
      
    }
    else if(arr[random]=='paper'&& option.toLowerCase() =='rock'){
     document.getElementsByClassName('result')[0].innerHTML = `you lost`
      
    }
    else if(option.tolowercase !=='paper' || option.tolowercase !=='rock' || option.tolowercase !=='scissor'){
     document.getElementsByClassName('result')[0].innerHTML = `type either rock or paper or scissor to play`

    }

  }
  return (
    <div className="App">
      <p className='game-p'>ROCK PAPER SCISSOR</p>
      <input className='game-input' onChange={onchangehandler} placeholder="TYPE YOUR OPTION"></input>
      <button className='btn'  onClick={ compselect}>lets play</button>
      <h2 className='h2'></h2>
      <h2 className='result'></h2>
    </div>
  );
}

export default App;

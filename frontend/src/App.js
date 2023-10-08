import './App.css'

const user = {};
user.name = "Manav";
let page = 0

function LoginButton() {

  function ButtonClick() {
    alert("Clicked!")
    page = 2;
  } 

  return ( 
    <button onClick={ButtonClick} className='button'>
      Login
    </button>
  )
}

function RegisterButton() {

  function ButtonClick() {
    //alert("Clicked!")
  } 

  return ( 
    <button onClick={ButtonClick} className='regbutton'>
      Register
    </button>
  )
}

function LoginPage() {
  return (
    <div className="App">
      <h1 className = "title">  Satell-eye</h1>
      <br/>
      <br/>
      <br/>
      <input tag = "userName" className='inputBoxes'></input>
      <br/>
      <br/>
      <input  tag = "userPass" className='inputBoxes'></input>
      <br/>
      <br/>
      <br/>
      <LoginButton/>
      <br/>
      <br/>
      <RegisterButton/>
    </div>
  );
}

function App() {
  let pageToDo;
  if(page === 0) {
    pageToDo = <LoginPage/>;
  }
  else if(page === 2){
    console.log("LOL")
  }
  return (
    <div>
      {pageToDo}
    </div>
    
  )
}

export default App;

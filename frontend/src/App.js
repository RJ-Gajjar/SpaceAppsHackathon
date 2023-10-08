import './App.css'

const user = {};
user.name = "Manav";

function MyButton() {

  function ButtonClick() {
    alert("Clicked!")
  } 

  return ( 
    <button onClick={ButtonClick} className='button'>
      I am a button!
    </button>
  )
}

function App() {
  return (
    <div className="App">
      <h1 className = "title">  Welcome to website <br/> Wanna chill, {user.name}?</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <MyButton/>
      
    </div>
  );
}

export default App;

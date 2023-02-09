

function App() {
  let questions ={
 statement : "What is the Capital of America?",
  options : ["WashingtonDc", "Malta" , "NewYork" , "Italy" , "Sweden"],
  Ans : " Washington Dc"
  }
  return (
    <div ClassName="container my-5">
  <h1> Welcome to My Quiz Competition Website</h1>  
<h3>{questions.statement}</h3>
    </div>
  );
}

export default App;

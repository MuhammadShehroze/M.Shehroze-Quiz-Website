
function App() {
  let questions = [
      {
          statement: "What is the capital of united kingdom ?",
          options: ["NEWYORKCITY", "LIBYA", "POLAND", "LONDON"],
          Ans: "london"
      },

      {
          statement: "Who Was the Father of Physics?",
          options: ["Galileo Galilei", "Robert Thomas", "Christan Eysa", "Bill Gates"],
          Ans: "Galileo Galilei"
      },
      {
          statement: "Who Was the Father of Browser?",
          options: ["Tim Berners Lee", "Johnson Thomas", "Red Bull", "Williams"],
          Ans: "Tim Berners lee"
      },
      {
          statement : "Who Discovered America?",
          options : ["Peppisco","Sabalissiyo","Christopher Columbus","Mark Antony"],
          Ans : "Christopher Columbus"
      },
      {
          statement : "Who Was the Innovator of Android?",
          options : ["Andy Rubin", "Knowling Disastor","Register","Newspaper"],
          Ans : "Andy Rubin"
  },
  ]
  return (
      <div className="container my-5">
          <h1 style= {{textAlign:"center"}}> @@ %% M. SHEHROZE :: WELCOME TO MY QUIZ COMPETITION </h1>
          <ol>
              {
                  questions.map(q => {
                      return (
                          <div>
                              <li className="bg-info">{q.statement}</li>
                              <ul>
                                  {q.options.map(options => <li className="text-primary">
                                      {options}
                                  </li>)}
                              </ul>
                          </div>
                      )





                  })
              }
          </ol >


      </div >

  );
}
export default App;
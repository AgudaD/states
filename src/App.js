import React from "react"
import './App.css';

class App extends React.Component {
  state = {
      person: {
      fullName: "",
      bio: "",
      imgSrc: "",
      profession: ""
      },
      };
      
      renderPerson = () => {
        this.setState ({
          person: {
            fullName: "Aguda David",
            bio: "Aspiring Engineer",
            imgSrc: "unspp.jpg",
            profession: "fullstack engineer",
          }
        })
      }
  

  render() {
    return (
      <div className = "App">

       <h2>{this.state.person.fullName}</h2>
       <h2>{this.state.person.bio}</h2>
       <img className="image" src={this.state.person.imgSrc} alt="" />
       <h2>{this.state.person.profession}</h2>
       <button onClick={this.renderPerson}>Click</button> 

      </div>
    )
  }

}

export default App;


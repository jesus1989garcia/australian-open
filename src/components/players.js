import React from 'react'


class Players extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playersList: this.props.list,
      id: 2
    }
  }

  handlePlayer = () => {
     if (this.state.id <= 4) { 
      this.setState({ id: this.state.id + 1})
    }else  this.setState({ id: 1})
     
    
  }

  
  render(){
    
    const styleCard = {width: "100%", height: "800px"}
    const photoStyle = {width: "auto", height: "100%"}
    return(
      <div className="players" style={{color:"white"}}>
          
            {this.state.playersList.filter(player => player.id == this.state.id ).map(jouer =>(
              <div style={styleCard} className="card">
                <h1 >{jouer.name}</h1>
                <img src={jouer.photo} style={photoStyle} className="photo-player"/>
              </div>
            ))}
            
          
          <button onClick={this.handlePlayer}>Next</button>
      </div>
    )
  }
}

export default Players
import React from 'react'

class Shop extends React.Component {
  render(){
    return(
      <div className="shop">
        <h1 className="title-blue">Shop AO merchandise</h1>
        <div className="shop-items">
        <div className="shop-it">
          <img src="https://ausopen.com/sites/default/files/styles/600x/public/Towel%20Tile.jpg?itok=ROKrtTOn"></img>
          <div>
            <p>AO 2021 Player towel</p>
            <p>$60.00</p>
            <button>BUY NOW</button>
          </div>
          
        </div>
        <div className="shop-it">
          <img src="https://ausopen.com/sites/default/files/styles/600x/public/Cap%20Tile.jpg?itok=sao7v0Vq"></img>
          <div>
            <p>Cap Round Logo</p>
            <p>$35.00</p>
            <button>BUY NOW</button>
          </div>
         
        </div>
        <div className="shop-it">
          <img src="https://ausopen.com/sites/default/files/styles/600x/public/Merch%20Girls%20Tile.jpg?itok=Ti4CiitY"></img>
          <div>
            <p>Jumper Cause A racquet Round</p>
            <p>$75.00</p>
            <button>BUY NOW</button>
          </div>
          
        </div>
        </div>
      </div>
    )
  }
}

export default Shop
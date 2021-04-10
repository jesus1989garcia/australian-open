import React from 'react'
import knLogo from '../imgs/kisspng-air-filter-car-k-n-engineering-cold-air-intake-5ae2daef03c501.7309645015248166230155.png'
import luzhouLogo from '../imgs/kisspng-baijiu-guojiao-1573-liquor-logo-luzhou-laojiao-5c1b50e619cdd7.5352613115452940541057.png'
import emiratesLogo from '../imgs/kisspng-logo-dubai-the-emirates-group-airline-sky-red-5b51da8a199ea2.085312861532091018105.png'
import rolexLogo from '../imgs/rolex-logo.png'
import Message from './Message'

const Partners = () => {
  return(
    <footer >
      <div className="footer">
        <hr></hr>
        <h1 className="title-blue">Partners</h1>
        <div className="partners-container">
          <img src={knLogo}></img>
          <img src={rolexLogo}></img>
          <img src={luzhouLogo}></img>
          <img src={emiratesLogo}></img>
        </div>
        <hr></hr>
      </div>
      <Message />
    </footer>
  )
}

export default Partners
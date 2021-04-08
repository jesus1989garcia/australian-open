import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

const Links = () => (
  <div className="links-container">
    <div className="shop-img">
        <img src="https://tpc.googlesyndication.com/simgad/16115506629651864251" />
    </div>
    <div className="shop-links">
    <div className="link-single">
      <a className="link-general">Result</a><FontAwesomeIcon icon={faChevronRight} className="tol"/><hr></hr>
    </div>
    <div className="link-single">
      <a className="link-general">Draws</a><FontAwesomeIcon icon={faChevronRight} className="tol" /><hr></hr>
    </div>
    <div className="link-single">
      <a className="link-general">Schedule</a><FontAwesomeIcon icon={faChevronRight} className="tole" /><hr></hr>
    </div>
    <div className="link-single">
      <a className="link-general">Highlights</a><FontAwesomeIcon icon={faChevronRight} className="tole"/><hr></hr>
    </div>
      
      
      
    </div>
        

  </div>
)

export default Links
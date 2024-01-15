import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (200)</div>
          </div>
          <div className="descriptionbox-description">
            <p>
                This websites typically display products or services along with descriptions,images,prices,and any available variations (e.g.,memory).Each product usually has its own dedicated page with relevant information.
            </p>
          </div>
    </div>
  )
}

export default DescriptionBox
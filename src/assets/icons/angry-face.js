import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const AngryFace = ({ angry }) => {
  const faceStyle = classNames('base', {
    'angry': angry
  })

  return (
    <div className={faceStyle}>
      <svg version="1.1" id="Capa_1"  x="0px" y="0px" width="150px" height="150px" viewBox="0 0 34.25 34.25" >
        <g>
          <path d="M17.125,0C7.668,0,0,7.667,0,17.125S7.668,34.25,17.125,34.25c9.459,0,17.125-7.667,17.125-17.125S26.584,0,17.125,0z
            M4.97,10.754c0.366-0.742,1.271-1.045,2.01-0.678l6.125,3.035c0.742,0.368,1.045,1.268,0.679,2.01
            c-0.263,0.528-0.793,0.834-1.347,0.834c-0.224,0-0.451-0.05-0.664-0.156l-6.125-3.035C4.906,12.396,4.601,11.496,4.97,10.754z
            M24.5,26.625H9.75c-0.828,0-1.5-0.671-1.5-1.5s0.672-1.5,1.5-1.5H24.5c0.828,0,1.5,0.671,1.5,1.5S25.33,26.625,24.5,26.625z
            M28.604,12.764l-6.125,3.035c-0.215,0.106-0.439,0.156-0.666,0.156c-0.551,0-1.082-0.306-1.344-0.834
            c-0.369-0.742-0.064-1.642,0.678-2.01l6.125-3.035c0.74-0.368,1.643-0.064,2.012,0.678C29.648,11.496,29.348,12.396,28.604,12.764z
            "/>
        </g>
      </svg>
    </div>
  )
}

AngryFace.propTypes = {
  angry: PropTypes.bool
}

export default AngryFace
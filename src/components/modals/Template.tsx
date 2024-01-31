import React from 'react'
import '../../css/modal.css'

const Template = ({onCancel}) => {
  return (
    <div className="modal">
        <div className="content">
            <button onClick={() => onCancel()}>onCancel</button>
        </div>
    </div>
  )
}

export default Template
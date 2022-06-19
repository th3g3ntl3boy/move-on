import React from 'react'
import { ToastContainer, Toast } from 'react-bootstrap'

const Notif = (props) => {
  return (
    <ToastContainer className="p-3" position="bottom-end">
        <Toast>
            <Toast.Body>{props.isi}</Toast.Body>
        </Toast>
    </ToastContainer>
  )
}

export default Notif
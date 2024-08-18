import React from 'react'
import { createPortal } from 'react-dom'

const EditTodoModel = ({children}) => {
    return createPortal(
        <>{children}</>,document.getElementById("model")
    )
}

export default EditTodoModel
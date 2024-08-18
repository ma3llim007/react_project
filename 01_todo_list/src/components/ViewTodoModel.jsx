import {createPortal} from 'react-dom'

const ViewTodoModel = ({children}) => {
  return createPortal(
    <>{children}</>,document.getElementById("model")
  )
}

export default ViewTodoModel;
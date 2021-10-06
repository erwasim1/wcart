import React from 'react';
import { Alert,variant } from 'react-bootstrap';

/**
* @author
* @function Message
**/

 const Message = ({variant,children}) => {
  return(
    <Alert variant={variant}>
    {children}
  </Alert>
   )

 }
 export default Message;
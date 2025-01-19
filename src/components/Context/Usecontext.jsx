import React, { createContext } from 'react'

export const DContext = createContext()
 function Usecontext(props) {

  
    const data = { }
  return (
    <DContext.Provider value={data}>
            {props.children}
        </DContext.Provider>
    
  )
}
export default Usecontext

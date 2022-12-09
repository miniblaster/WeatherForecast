import { createContext, useState } from "react";

const CityContext = createContext();

const CityProvider = (props) =>{
  const {children} = props;
  const [selected, setSelected] = useState(0);
  const [data,setData] = useState([])
  return (
    <CityContext.Provider value={{selected, setSelected,data, setData}}>
      {children}
    </CityContext.Provider>
  )
}


export {CityContext, CityProvider}
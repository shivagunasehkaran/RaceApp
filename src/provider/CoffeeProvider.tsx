// react library imports
import React, {createContext, useState} from 'react';
// create context for global access
export const CoffeeContext = createContext();

const CoffeeProvider = React.memo(({children}) => {
  const [coffeeData, setCoffeeData] = useState([]);
  return (
    <CoffeeContext.Provider
      value={{
        setCoffeeData: setCoffeeData,
        coffeeData: coffeeData,
      }}>
      {children}
    </CoffeeContext.Provider>
  );
});

export default CoffeeProvider;

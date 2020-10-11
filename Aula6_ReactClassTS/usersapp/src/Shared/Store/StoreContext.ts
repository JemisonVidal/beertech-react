import React from 'react';
import User from "../../Repository/User";

const StoreContext = React.createContext({
  data: [] as User[],
  setData: (data: User[]) => { }
});

export default StoreContext
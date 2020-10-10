import React from 'react';
import UserPage from './Pages/Users'

import './assets/scss/main.scss';

function App() {
  return (
    <div className="App">
      <UserPage name="" users={[]} />
    </div>
  );
}

export default App;


// Quando um componente é criado 1x
// ----------------------------------

// constructor()
// static getDerivedStateFromProps()
// UNSAFE_componentWillMount() (Depreciado)
// render()
// componentDidMount()

// Toda vez que um componente é atualizado
// ----------------------------------------

// UNSAFE_componentWillUpdate() (Depreciado)
// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// Quando um componente é removido do DOM
// componentWillUnmount()

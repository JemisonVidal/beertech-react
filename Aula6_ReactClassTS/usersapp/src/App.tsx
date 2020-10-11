import React from 'react';
import UserPage from './Pages/Users'
import BaseLayout from './Shared/components/BaseLayout/Base/index'
import ProviderContext from './Shared/Store/ProviderContext'

import './assets/scss/main.scss';

function App() {
  return (
    <div className="App">
      <ProviderContext>
        <BaseLayout>
          <UserPage />
        </BaseLayout>
      </ProviderContext>
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

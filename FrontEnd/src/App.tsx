import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import { MainAppBar } from './components/Appbar';

function App() {

  return (
    <>
      <MainAppBar/>
      <RouterProvider router={router} />
    </> 
  )
}

export default App



import {Provider} from 'react-redux';
import store from './store/store';
import './App.css';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieDisplay from './components/MovieDisplay';



function App() {
  const router =createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/:entityType/:id",
      element:<MovieDetails/>
    },
    {
      path:"/movie",
      element:<MovieDisplay/>
    }
    
  ])

  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router} />
     </Provider>
    </>
  );
  }

export default App;


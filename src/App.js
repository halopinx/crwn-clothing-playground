import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'

const Shop =  () => {
    return (
        <div>
            <h1>Shop Page</h1>
            <p>The shop page</p>
        </div>
    )
}

const App = () => {
  return (
     <Routes>
       <Route path='/' element={ <Navigation />}>
           <Route index element={<Home />} />
           <Route path='shop' element={<Shop />} />
       </Route>
     </Routes>
  );
}

export default App;

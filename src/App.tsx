import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PostDetails from "./pages/PostDetails"
import FavoritesPage from "./pages/FavoritesPage"

const App = () => {
  const links = [
    {path: "/", element: <Home/>},
    {path: "/post/:id", element: <PostDetails/>},
    {path: "/favorites", element: <FavoritesPage/>}
  ]
  return (
    <>
        <Routes>
            {links.map(({path, element}, index)=>{
                 return  <Route key={index} path={path} element={element} ></Route>
            })}
        </Routes>
    </>
  )
}

export default App

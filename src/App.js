import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./Pages/AddItems/AddItems";
// import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import ManageItems from "./Pages/ManageItems/ManageItems";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import UpdateItem from "./Pages/UpdateItem/UpdateItem";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/manageitems' element={<ManageItems />} /> */}
        <Route
          path='/home/:id'
          element={
            <RequireAuth>
              <UpdateItem></UpdateItem>
            </RequireAuth>
          }
        />
        <Route
          path='/manageitems'
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        />
        <Route
          path='/myitems'
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        />
        <Route
          path='/additem'
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

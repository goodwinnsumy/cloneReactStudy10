import './AppRoutes.scss';
import Counter from "../Counter/Counter";
import Posts from "../Posts/Posts";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Layout from "./Layout";
import NotFoundPage from "../../pages/NotFoundPage";
import Auth from "../Auth/Auth";
import RequireAuth from "./RequireAuth";
import Post from "../Post/Post";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="auth" element={<Auth/>}/>


          <Route path="counters" element={
            <RequireAuth>
              <Counter/>
            </RequireAuth>
          }/>

          <Route path="posts" element={
            <RequireAuth>
              <Posts/>
            </RequireAuth>
          }/>

          <Route path="posts/:postID" element={
            <RequireAuth>
              <Post/>
            </RequireAuth>
          }/>

          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;

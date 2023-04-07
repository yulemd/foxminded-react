import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { Layout } from '../pages/Layout';
import { PostsPage } from '../pages/PostsPage';
import { UserPage } from '../pages/UserPage';
import { TodoPage } from '../pages/TodoPage';
import { ErrorPage } from '../pages/ErrorPage';
import { UserDataPage } from "../Components/UserDataPage";
import { appRoutes } from "./appRoutes";
import { UserList } from "../Components/UserList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={appRoutes.posts} element={<Layout />}>
      <Route 
        index={true}
        element={<PostsPage />} 
      />
      <Route 
        path={appRoutes.users} 
        element={<UserPage />}
      >
        <Route index element={<UserList />} />
        <Route 
          path=":id" 
          element={<UserDataPage />} 
        />
      </Route>
      <Route 
        path={appRoutes.todos} 
        element={<TodoPage />} 
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
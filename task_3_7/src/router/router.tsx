import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { Layout } from '../pages/Layout';
import { PostsPage } from '../pages/PostsPage';
import { UserPage } from '../pages/UserPage';
import { TodoPage } from '../pages/TodoPage';
import { ErrorPage } from '../pages/ErrorPage';
import { UserDataPage } from "../Components/UserDataPage";
import { AppRoutes } from "./AppRoutes";
import { UserList } from "../Components/UserList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={AppRoutes.posts} element={<Layout />}>
      <Route 
        index={true}
        element={<PostsPage />} 
      />
      <Route 
        path={AppRoutes.users} 
        element={<UserPage />}
      >
        <Route index element={<UserList />} />
        <Route 
          path=":id" 
          element={<UserDataPage />} 
        />
      </Route>
      <Route 
        path={AppRoutes.todos} 
        element={<TodoPage />} 
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
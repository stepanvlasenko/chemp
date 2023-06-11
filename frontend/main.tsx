import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './main.css'
import Main from './pages/Main/Main'
import PostPage from './pages/PostPage/PostPage';
import Authentication from './pages/Authentication/Authentication';
import CreatePost from './pages/CreatePost/CreatePost';
import Registration from './pages/Registration/Registration';
import UserPage from './pages/UserPage/UserPage';

import App from './App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Main />,
            },
            {
                path: "post/:postId",
                loader: ({params}) => {
                    if (params.postId) {
                        return params.postId
                    } else return null
                },
                element: <PostPage />
            },
            {
                path: "authentication",
                element: <Authentication />
            },
            {
                path: "post/create/:userId",
                loader: ({params}) => {
                    if (params.userId) {
                        return params.userId
                    } else return null
                },
                element: <CreatePost />
            },
            {
                path: 'registration',
                element: <Registration />
            },
            {
                path: 'user/:userId',
                loader: ({params}) => {
                    if (params.userId) {
                        return params.userId
                    } else return null
                },
                element: <UserPage />
            }
        ]
    },
    // {
    //     path: "/post/:postId",
    //     loader: ({params}) => {
    //         if (params.postId) {
    //             return params.postId
    //         } else return null
    //     },
    //     element: <PostPage />
    // },
    // {
    //     path: "/authentication",
    //     element: <Authentication />
    // },
    // {
    //     path: "/post/create/:userId",
    //     loader: ({params}) => {
    //         if (params.userId) {
    //             return params.userId
    //         } else return null
    //     },
    //     element: <CreatePost />
    // },
    // {
    //     path: '/registration',
    //     element: <Registration />
    // },
    // {
    //     path: '/user/:userId',
    //     loader: ({params}) => {
    //         if (params.userId) {
    //             return params.userId
    //         } else return null
    //     },
    //     element: <UserPage />
    // }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <RouterProvider router={router} />
    </>
)

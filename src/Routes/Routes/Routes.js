import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Course from "../../pages/Course/Course";
import CourseCard from "../../pages/CourseCard/CourseCard";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import Profile from "../../pages/Others/Profile/Profile";
import TermsAndConditions from "../../pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <PrivateRoute><Courses></Courses></PrivateRoute>
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
            },
            
            {
                path: '/course/:id',
                element: <CourseCard></CourseCard>,
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/profile',
                element: <Profile></Profile>,
            }
            ,
            {
                path:'/termsandconditions',
                element: <TermsAndConditions></TermsAndConditions>
            }

        ]
    }
])
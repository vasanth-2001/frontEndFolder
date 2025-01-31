import { createBrowserRouter } from "react-router-dom";
import VirtualDOM from "../components/VirtualDOM";
import MyImagesComp from "../components/MyImagesComp";
import EventComp from "../components/EventComp";
import CssComp from "../components/CssComp";
import MyPureComp from "../components/MyPureComp";
import PageNotFound from "../layout/PageNotFound";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHooksComp from "../Hooks/UseStateHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import MainDashboardComp from "../layout/MainDashboardComp";
import LoginComp from "../layout/LoginComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValComp from "../components/FormValComp";
import ProductDashComp from "../CRUD/productDashComp";
import ProductAddComp from "../CRUD/productAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import ProtectedRouting from "./ProtectedRouting";
import MyCorousalComp from "../components/MyCorousalComp";
import DataListComp from "../reduxCode/api/DataListComp";
import AuthorAddComp from "../CRUD/author/authorAddComp";
import AuthorDeleteComp from "../CRUD/author/authorDeleteComp";
import AuthorEditComp from "../CRUD/author/authorEditComp";
// import LogoutComp from "../layout/LogoutComp";

const routing = createBrowserRouter([
    {path:"",element:<LoginComp/>},
    {path:"login",element:<LoginComp/>},

    {
        // path: "mainDashboard", element: <MainDashboardComp />, children: [
        path: "mainDashboard", element: <ProtectedRouting Component={MainDashboardComp} />, children: [
            // deafault routing
            { path: "", element: <VirtualDOM /> },
            {path:"favcolor",element:<MyFavColorComp newColor="Green"/>},
            {path:"formval",element:<FormValComp/>},
            {path:"productdash",element:<ProductDashComp/>},
            {path:"authordash",element:<AuthorAddComp/>},
            {path:"authoredit/:id",element:<AuthorDeleteComp/>},
            {path:"authoradd",element:<AuthorEditComp/>},
            {path:"carousal",element:<MyCorousalComp/>},
            {path:"datalist",element:<DataListComp/>},
            // {path : "logout",element:<LogoutComp/>},
            {path:"productadd",element:<ProductAddComp/>},
            {path:"productedit/:id",element:<ProductEditComp/>},
            //naming routing
            { path: "virtualdom", element: <VirtualDOM /> },
            //parametrize routing
            { path: "images/:id", element: <MyImagesComp /> },
            // Child routing
            {
                path: "hooks", element: <ReactHooksComp />, children: [
                    { path: "usestate", element: <UseStateHooksComp /> },
                    { path: "useeffect", element: <UseEffectHooksComp /> }
                ]
            },
            { path: "event", element: <EventComp /> },
            { path: "mycss", element: <CssComp /> },

        ]
    },

    //wild- card routing
    // {path:"*",element:<MyPureComp></MyPureComp>}
    // {path:"*",element:<PageNotFound/>}
]

)

export default routing;
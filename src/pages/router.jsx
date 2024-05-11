import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, Component }) => {
        return <Route key={ title } path={ `/${path}` } element={ <Component /> } />;
    });

    return <Routes>{ pageRoutes }</Routes>;
};

export default Router;
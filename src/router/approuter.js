import { Routes, Route, BrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/publicLayout";

//pages
import HomePage from "../pages/homePage/homePage";
import constants from "../constants";

function AppRouter(){
    return (
         <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={constants.routes.HOME_PAGE.route} element={<HomePage/>}/>
                    {/* <Route path="*" element={<PageNotFound />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    
)
}
export default AppRouter;
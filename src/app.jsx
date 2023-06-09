import React, {useEffect} from "react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {
    BurgerConstructorPage,
    NotFound404Page,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    ProfilePage,
    IngredientDetailsPage
} from './pages/index';
import {
    LOGIN_PATH,
    REGISTER_PATH,
    FORGOT_PATH,
    RESET_PASSWORD_PATH,
    PROFILE_PATH, BURGER_CONSTRUCTOR_PATH, INGREDIENT_PATH
} from "./constants/constants";
import AppHeader from "./components/app-header/app-header";
import {ProtectedRouteElement} from "./components/protected-route-element/protected-route-element";
import {useDispatch} from "react-redux";
import {getBurgerIngredients} from "./services/actions/burger-ingredients";
import Modal from "./components/modal/modal";
import IngredientDetails from "./components/ingredient-details/ingredient-details";

export default function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const background = location.state && location.state.background;

    const handleCloseModal = () => {
        navigate(-1);
    }

    useEffect(() => {
        dispatch(getBurgerIngredients());
    }, [dispatch]);

    return (
        <>
            <AppHeader/>
            <Routes location={background || location}>
                <Route path={BURGER_CONSTRUCTOR_PATH} element={<BurgerConstructorPage/>}/>
                <Route path={LOGIN_PATH}
                       element={<ProtectedRouteElement isAuthRequire={false} element={<LoginPage/>}/>}/>
                <Route path={REGISTER_PATH}
                       element={<ProtectedRouteElement isAuthRequire={false} element={<RegisterPage/>}/>}/>
                <Route path={FORGOT_PATH}
                       element={<ProtectedRouteElement isAuthRequire={false} element={<ForgotPasswordPage/>}/>}/>
                <Route path={RESET_PASSWORD_PATH}
                       element={<ProtectedRouteElement isAuthRequire={false} element={<ResetPasswordPage/>}/>}/>
                <Route path={PROFILE_PATH}
                       element={<ProtectedRouteElement isAuthRequire={true} element={<ProfilePage/>}/>}/>
                <Route path={INGREDIENT_PATH} element={<IngredientDetailsPage/>}/>

                <Route path="*" element={<NotFound404Page/>}/>
            </Routes>

            {background &&
                <Routes>
                    <Route
                        path={INGREDIENT_PATH}
                        element={<Modal onClose={handleCloseModal}><IngredientDetails/></Modal>}
                    />
                </Routes>
            }
        </>
    )
}
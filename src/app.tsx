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
    IngredientDetailsPage,
    FeedPage,
    FeedItemPage,
    OrdersHistoryPage
} from './pages';
import {
    LOGIN_PATH,
    REGISTER_PATH,
    FORGOT_PATH,
    RESET_PASSWORD_PATH,
    PROFILE_PATH,
    BURGER_CONSTRUCTOR_PATH,
    INGREDIENT_PATH,
    FEED_PATH,
    FEED_ELEMENT_PATH, PROFILE_ORDERS_PATH, PROFILE_ORDERS_ELEMENT_PATH
} from "./constants/constants";
import AppHeader from "./components/app-header/app-header";
import {ProtectedRouteElement} from "./components/protected-route-element/protected-route-element";
import {getBurgerIngredients} from "./services/actions/burger-ingredients";
import Modal from "./components/modal/modal";
import IngredientDetails from "./components/ingredient-details/ingredient-details";
import {useDispatch} from "./services/hooks/use-dispatch";
import OrdersHistoryItemPage from "./pages/orders-histore-item/orders-histore-item";
import FeedItemNoAuth from "./components/feed-item-no-auth/feed-item-no-auth";
import FeedItemAuth from "./components/feed-item-auth/feed-item-auth";

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
                <Route path={PROFILE_ORDERS_PATH}
                       element={<ProtectedRouteElement isAuthRequire={true} element={<OrdersHistoryPage/>}/>}/>
                <Route path={PROFILE_ORDERS_ELEMENT_PATH}
                       element={<ProtectedRouteElement isAuthRequire={true} element={<OrdersHistoryItemPage/>}/>}/>
                <Route path={INGREDIENT_PATH} element={<IngredientDetailsPage/>}/>
                <Route path={FEED_PATH} element={<FeedPage/>}/>
                <Route path={FEED_ELEMENT_PATH} element={<FeedItemPage/>}/>

                <Route path="*" element={<NotFound404Page/>}/>
            </Routes>

            {background &&
                <Routes>
                    <Route
                        path={INGREDIENT_PATH}
                        element={<Modal onClose={handleCloseModal}><IngredientDetails/></Modal>}
                    />
                    <Route
                        path={FEED_ELEMENT_PATH}
                        element={<Modal onClose={handleCloseModal}><FeedItemNoAuth/></Modal>}
                    />
                    <Route
                        path={PROFILE_ORDERS_ELEMENT_PATH}
                        element={<Modal onClose={handleCloseModal}><FeedItemAuth/></Modal>}
                    />
                </Routes>
            }
        </>
    )
}
import React from 'react'
import { NotFoundScreen } from '../screens/NotFoundScreen/NotFoundScreen';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { FoodScreen } from '../screens/FoodScreen/FoodScreen';
import { MenuFoodScreen } from '../screens/MenuFoodScreen/MenuFoodScreen';
import { CategoryScreen } from '../screens/CategoryScreen/CategoryScreen';

export const DashBoardRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FoodScreen/>} /> 
                <Route path="/menu-food" element={<MenuFoodScreen/>} /> 
                <Route path="/menu-food/category/:category" element={<CategoryScreen/>} /> 
                <Route path="*" element={<NotFoundScreen />} /> 
            </Routes>
        </BrowserRouter>
    )
}

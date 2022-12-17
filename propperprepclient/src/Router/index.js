import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../Views/Home';
import Profile from '../Views/Profile';
import Recipes from "../Views/Recipes";
import RecipeForm from "../Views/RecipeForm";
import RescheduleForm from "../Views/RescheduleForm";
//import Authenticated from "../Views/Authenticated";
import Login from "../Views/Login";


//add User
export default function Router({ user }) {

    //<Route exact path="/" element={<Authenticated user={user} />} />
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/recipes" element={<Recipes />} />
                <Route exact path="/recipe-form" element={<RecipeForm />} />
                <Route exact path="/reschedule-form" element={<RescheduleForm />} />
            </Routes>
        </div>
    )
}
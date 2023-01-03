import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../Views/Home';
import Profile from '../Views/Profile';
import Recipes from "../Views/Recipes";
import RecipeForm from "../Views/RecipeForm";
import RescheduleForm from "../Views/RescheduleForm";
//import Authenticated from "../Views/Authenticated";
import Login from "../Views/Login";
import RecipeView from "../Views/RecipeView";
import RecipeEditForm from "../Views/RecipeEditForm";
import Schedule from "../Views/Schedule";


//add User
export default function Router({ user }) {
    //debugger

    //<Route exact path="/" element={<Authenticated user={user} />} />
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                
                <Route exact path="/profile" element={<Profile user={user} />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/recipes" element={<Recipes />} />
                <Route exact path="/recipe-form" element={<RecipeForm firebaseId={user.uid} />} />
                <Route exact path="/recipe-view/:id" element={<RecipeView />} />
                <Route exact path="/recipe-form/:id" element={<RecipeEditForm />} />
                <Route exact path="/reschedule-form" element={<RescheduleForm user={user} />} />
                <Route exact path="/schedule" element={<Schedule />} />
            </Routes>
        </div>
    )
}
import React from "react";
import { signOutUser } from "../Utils/auth"

//add User
export default function Authenticated() {

    return (
        <div>
            <h1>Welcome</h1>
            <div>
                <button type="button" className="btn btn-danger" onClick={signOutUser}></button>
            </div>
        </div>
    )
}
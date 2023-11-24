import React, { useState, useContext } from "react";

import UserContext from "../Context/Usercontext";

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div>Please Login</div>

    return <div> Welcome {user.username} and user pass {user.userpass}</div>
}

export default Profile
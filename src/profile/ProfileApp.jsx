import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
    const [name, setName]=useState("Murtaki")
    return (
        <ProfileContext.Provider value={name}>
            <h1 className="">Profile App</h1>
            <Profile />
            <ProfileAddress />
            <ProfileForm name={name} setName={setName}/>
        </ProfileContext.Provider>
    )
}
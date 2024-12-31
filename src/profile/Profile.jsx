import { useContext } from "react"
import { ProfileContext } from "./ProfileContext"

export default function Profile() {
    const profile = useContext(ProfileContext);

    return (
        <>
            <h2 className="">Profile</h2>
            <p className="">Hello {profile}</p>
        </>
    )
}
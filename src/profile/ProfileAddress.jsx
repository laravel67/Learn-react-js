import { useContext } from "react"
import { ProfileContext } from "./ProfileContext"

export default function ProfileAddress() {
    const profile = useContext(ProfileContext);

    return (
        <>
            <h2 className="">Profile Address</h2>
            <p className="">Alamat {profile}</p>
        </>
    )
}
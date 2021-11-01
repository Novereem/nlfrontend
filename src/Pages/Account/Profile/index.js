import {useEffect} from "react";
import ProfilePivot from "./Components/Pivot";

function Account() {
    useEffect(() => {
        if (localStorage.getItem('darkMode') === undefined) {
            localStorage.setItem('darkMode', "true")
        }
    })
    return (
        <div>
            <ProfilePivot/>
        </div>
    );
}

export default Account;

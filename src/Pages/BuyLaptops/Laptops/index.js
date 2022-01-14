import {getAPITUT} from "../../../Redux/selectors";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import SingleLaptop from "./Components/Laptops";

function Laptops(props) {
    useEffect(() => {
        if (props.apiTut !== undefined) {
        }
    }, [props.apiTut])

    return(
        <div>
            <SingleLaptop/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        apiTut: getAPITUT(state)
    };
}

export default connect(mapStateToProps)(Laptops)
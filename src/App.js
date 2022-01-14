import './App.css';
import {connect} from "react-redux";
import {useEffect} from "react";
import Router from "./Components/Router";
import HeaderNew from "./Components/Shared/HeaderNew";
import {setAPI, setAPITUT} from "./Redux/actions";
import {getAPI} from "./Redux/selectors";

const axios = require("axios")
const api = axios.create({
  baseURL: "http://localhost:5000"
})

const apiTut = axios.create({
    baseURL: "https://localhost:6001"
})

function App(props) {
    useEffect(() => {
        props.dispatch(setAPI(api));
        props.dispatch(setAPITUT(apiTut));
    }, [])
  return (
    <div className="App">
        <HeaderNew/>
        <Router/>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        api : getAPI(state)
    };
}

export default connect(mapStateToProps)(App);

import './App.css';
import {lightTheme, darkTheme} from "./Themes";
import {ThemeProvider} from "@fluentui/react";
import {connect} from "react-redux";
import {useEffect} from "react";
import Router from "./Components/Router";
import Header from "./Components/Shared/Header";
import HeaderNew from "./Components/Shared/HeaderNew";
import {setAPI} from "./Redux/actions";
import {getAPI} from "./Redux/selectors";

const axios = require("axios")
const api = axios.create({
  baseURL: "http://localhost:5000"
})
function App(props) {
    useEffect(() => {
        if(localStorage.getItem('darkMode') === undefined){
            localStorage.setItem('darkMode', "true")
        }
        props.dispatch(setAPI(api));
    }, [])
  return (
    <div className="App">
        <HeaderNew/>
        <Router/>
    </div>
  );
}

function GetBruh(){
    api.get("/laptop").then(response => { console.log(response.data) })
}

const mapStateToProps = (state) => {
    return {
        api : getAPI(state)
    };
}

export default connect(mapStateToProps)(App);

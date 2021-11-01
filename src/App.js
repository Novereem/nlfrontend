import './App.css';
import {lightTheme, darkTheme} from "./Themes";
import {ThemeProvider} from "@fluentui/react";
import {useEffect} from "react";
import Router from "./Components/Router";
import Header from "./Components/Shared/Header";

const axios = require("axios")
const api = axios.create({
  baseURL: "http://localhost:5000"
})
function App() {
    useEffect(() => {
        if(localStorage.getItem('darkMode') === undefined){
            localStorage.setItem('darkMode', "true")
        }
    })
  return (
    <div className="App">

        <ThemeProvider applyTo={"body"} theme={localStorage.getItem('darkMode') === 'true' ? darkTheme : lightTheme}>
        <Header/>
        <Router/>
            <button onClick={GetBruh}/>
        </ThemeProvider>
    </div>
  );
}

function GetBruh(){
    api.get("/laptop").then(response => { console.log(response.data) })
}

export default App;

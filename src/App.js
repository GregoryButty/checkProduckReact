import React from "react"
import Header from "./components/Header"
import MainList from "./components/MainList"

class App extends React.Component {
    render() {
        return (<div>

            <Header title1='Бжілка-' title2='Українка'/>
            <MainList />

        </div>)
    }
}

export default App
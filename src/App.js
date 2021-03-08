
import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"

function App() {
    return (
        <div>
            <Menu />
            <hr />
            <Favorite />
        </div>
    )
}

export default App

//Higher order Component
// A function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it.
import React from "react";
import List from "./List";
import Title from "./Title";

function Main(props){
    return <div>
        <Title title={"toDos"}/>
        <List tasks={["Mov the lawn","Walk the dog"]}/>
        <List tasks={["Mov the lawn","Walk the dog"]}/>
    </div>
}

export default Main;
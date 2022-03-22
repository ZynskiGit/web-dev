import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import TodoItem from "./todo/todo-item";



const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>

            <Styles/>
            <Classes/>
        </div>
    )
};

export default Labs;


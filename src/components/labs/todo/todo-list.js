import TodoItem from "./todo-item";     // .js is optional
import todos from "./todos.json"; // reformat as JSON
const TodoList = () => {
    return(
        <ul>
            {                                           // don't need $
                todos.map(todo => {
                    return(<TodoItem todo={todo}/>);    // use tag syntax instead attribute as parameter
                })                                      // don't need join()
            }
        </ul>
    );                                                  // don't need ''
}
export default TodoList;


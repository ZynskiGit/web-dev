const TodoItem = ({                         // provide default object so we can test component standalone
                      todo = {
                          done: true,
                          title: 'Buy milk',
                          status: 'COMPLETED'
                      }
                  }) => {
    return(                                 // we don't need ''
        <li>
            <input type="checkbox"              // don't need $, use defaultChecked to set intial state
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;


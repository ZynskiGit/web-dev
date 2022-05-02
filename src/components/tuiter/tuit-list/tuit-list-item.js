import {useDispatch} from "react-redux";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return(
        <li className="wd-border-solid wd-border-thin wd-border-color  list-group-item">
                            <span className="align-text-top wd-font wd-fg-color-black">
                                {tuit.topic}
                            <img
                                className="wd-rounded-corners-all-around-25 wd-border-right wd-margin-right-16 "
                                alt={"A javascript Logo"}
                                src="/tuiter/javascript.png"
                                width="100"
                                height="100"></img></span>
            <h1 class="wd-font wd-fg-color-black ">{tuit.title} <i
                className="fa fa-check-circle"></i> - {tuit.time}</h1>
            <i onClick={() =>
                deleteTuit(tuit)}
               className="fas fa-remove fa-2x
                  fa-pull-right"></i>
            <h1 className="wd-font wd-fg-color-black">{tuit.tuit}</h1>
            <h1 className="wd-topic-text ">{tuit.stats.retuits}</h1>


        </li>
    );
}
export default TuitListItem;

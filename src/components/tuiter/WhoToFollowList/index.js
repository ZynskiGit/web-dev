import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return(
        <ul>
            {                                           // don't need $
                who.map(who => {
                    return(<WhoToFollowListItem who={who}/>);    // use tag syntax instead attribute as parameter
                })                                      // don't need join()
            }
        </ul>
    );                                                  // don't need ''
}
export default WhoToFollowList;


import {Link} from "react-router-dom";
import TuitsList from "./TuitList";

const Tuiter = () => {
    return(
        <div>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
            <TuitsList/>
        </div>
    )
}
export default Tuiter
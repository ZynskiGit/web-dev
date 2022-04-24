import post from "./post.json"
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return(
        <ul>
            {                                           // don't need $
                post.map(post => {
                    return(<PostSummaryItem post={post}/>);    // use tag syntax instead attribute as parameter
                })                                      // don't need join()
            }
        </ul>
    );                                                  // don't need ''
}
export default PostSummaryList;


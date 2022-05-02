const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "/tuiter/spacex.png"
        }
    }) => {
    return(
        <li className={"list-group-item"}>
            {post.topic}
            {post.userName}
            {post.time}
            <img src={post.image} alt={""}/>
            {post.title}
        </li>
    );
}
export default PostSummaryItem;



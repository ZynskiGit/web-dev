import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return (
        <div className={"container"}>
            <div className="row">
                <input
                    className="fa wd-fg-color-white wd-border-color wd-rounded-corners-all-around "
                    type="search"
                    placeholder="&#xF002; Search Tuiter"
                    id="wd-search"
                    style={{width: '90%'}}
                />
                <div>
                <ul className="nav mb-2 nav-tabs">
                    <div>

                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="for-you.html">For You</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="trending.html">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="news.html">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="sports.html">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="entertainment.html">Entertainment</a>
                            </li>
                        </ul>
                    </div>
                </ul>
                </div>
                <div className="card bg-dark text-white">
                    <img src="/tuiter/starship.jpg" className="card-img" alt="prop">
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div></img>
                </div>

            </div>


            {PostSummaryList()}
        </div>);
}
export default ExploreComponent;


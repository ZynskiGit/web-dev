import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (
        <div>
            <div className="row">
                <input
                    className="fa wd-fg-color-white wd-border-color wd-rounded-corners-all-around "
                    type="search"
                    placeholder="&#xF002; Search Tuiter"
                    id="wd-search"
                    style={{width: '90%'}}
                />
            </div>
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
            <div className="card" style={{width: '400px'}}>
                <img className="card-img-top" src="img_avatar1.png" style={{width: '100%'}}></img>
                <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text some example text. John Doe is an architect and
                        engineer</p>
                    <a href="profile.html" className="btn btn-primary">See Profile</a>
                </div>
            </div>

            {PostSummaryList()}
        </div>);
}
export default ExploreComponent;


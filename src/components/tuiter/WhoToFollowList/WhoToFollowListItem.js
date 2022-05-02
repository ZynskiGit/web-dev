const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '/tuiter/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(                                 // we don't need ''
        <li className={"list-group-item"}>
            <span className={"flex"}>
            <img
                className={"wd-rounded-corners-all-around-25"}
                width={50}
                height={50}
                alt={"..."}
                src={who.avatarIcon}/>
            {who.userName}
            (@{who.handle})
                <button type="submit" className="btn btn-primary wd-border-right rounded-pill">Follow
                    </button>
            </span>
        </li>
    );
}
export default WhoToFollowListItem;



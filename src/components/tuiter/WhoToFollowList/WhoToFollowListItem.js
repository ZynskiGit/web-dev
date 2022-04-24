const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(                                 // we don't need ''
        <li>
            <img src={who.avatarIcon}/>
            {who.userName}
            ({who.handle})
        </li>
    );
}
export default WhoToFollowListItem;



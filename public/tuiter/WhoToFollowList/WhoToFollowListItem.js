const WhoToFollowListItem = (who) => {
    return (`
<li className="list-group-item">

<span className="flex">

<img
                            className="wd-rounded-corners-all-around-25 "

                            src={who.avatarIcon}
                            width="50"
                            height="50">
                    
                    <span width="100%">
                    {who.userName}
                    <i class="fa fa-check-circle"></i></br>
                    @{who.handle}
                    <button type="submit" class="btn btn-primary wd-border-right rounded-pill">Follow
                    </button>
     
                    </span> 
                    
                    
                    
                    <div>
                    
                    </div>
              
                    </span>
                    
                    
                     
                    </li>
                    
                   
    `);
}
export default WhoToFollowListItem;
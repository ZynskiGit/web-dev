import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitListItem
    from "./tuit-list-item";
import './tuits.css';
import {createTuit, deleteTuit, findAllTuits,updateTuit}
    from "../actions/tuits-actions";




const TuitList = () => {

    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();

    useEffect(() =>
            findAllTuits(dispatch),
        [dispatch]);

    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    return (


        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>

                    <li className="list-group-item">
                        <TuitListItem key={tuit._id}
                                      tuit={tuit.tuit}
                        />
                        <div>
                            Likes: {tuit.likes}
                            <i onClick={() => updateTuit(dispatch, {
                                ...tuit,
                                likes: tuit.likes + 1
                            })} className="far fa-thumbs-up ms-2"></i>
                        </div>

                        <i className="fas fa-remove float-end"
                           onClick={() => deleteTuit(
                               dispatch, tuit)}></i>)
                        <button onClick={() =>
                            createTuit(dispatch, newTuit)}
                                className="btn btn-primary float-end">
                            Tuit
                        </button>
                        <textarea className="form-control w-75"
                                  onChange={(e) =>
                                      setNewTuit({
                                          ...newTuit,
                                          tuit: e.target.value
                                      })}></textarea>
                    </li>
                )
            }
        </ul>
    );

}

export default TuitList;


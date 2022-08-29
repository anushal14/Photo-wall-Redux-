import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function List(props) {
    return <div>
        <Link  className="addIcon" to="/AddPhoto"> </Link>
        <div className="photoGrid">
            {props.posts
            .sort(function(x,y){
                return y.id - x.id
            })
            .map((post) => <Photo key={post.id} post={post} index={post.id} {...props}/>)}
        </div>
    </div>
}

List.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default List;
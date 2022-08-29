import React, { Component } from "react";
import List from "./List";
import Title from "./Title";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import {removePost} from '../redux/actions'

class Main extends Component {
    constructor() {
        super()
    }


    render() {
        console.log(this.props.posts)
        return<div>
            <Route exact path="/" render={() => (
                <div>
                    <Title title={"Photowall"} />
                    <List {...this.props}  />
                </div>
            )} />

            <Route path="/AddPhoto" render={({history})=>(
                <AddPhoto onAddPhoto={(addedPost)=>{
                    history.push('/')
                }}/>
            )}/>

        </div>

    }
}

export default Main;
import React, { Component } from "react";
import List from "./List";
import Title from "./Title";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import Single from "./Single";

class Main extends Component {
  
    componentDidMount(){
        this.props.startLoadingPost()
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
                <AddPhoto {...this.props}/>
            )}/>

            <Route path='/single/:id' render={(params)=>(
                <Single {...this.props} {...params}/>
            )}/>
        </div>

    }
}

export default Main;
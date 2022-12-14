import React, { Component } from "react";

class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const imageLink = e.target.elements.link.value
        const description = e.target.elements.description.value
        const post = {
            id:Number(new Date()),
            description:description,
            imageLink:imageLink
        }
        if(description && imageLink){
           this.props.startAddingPost(post)
           this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <h1>Add Photo</h1>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>Post</button>
                </form>
                </div>
            </div>)
    }
}
export default AddPhoto;
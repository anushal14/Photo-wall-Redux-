import { database } from "../database/config"
import {ref, child, push, update, get } from "firebase/database";

export function startAddingPost(post){
    return async (dispatch)=>{
        const newPostKey = push(child(ref(database), 'posts')).key;

        // Write the new post's data simultaneously in the posts list.
        const updates = {};
        updates['/posts/' + newPostKey] = post;
      
        try {
            await update(ref(database), updates);
            dispatch(addPost(post));
        } catch (error) {
            console.log(error);
        }
    }
}

export function startLoadingPost(){

    const dbRef = ref(database);


    return async (dispatch)=>{
      return await get(child(dbRef, `posts`)).then((snapshot)=>{
        let posts=[]
        snapshot.forEach((childSnapshot) => {
            posts.push(childSnapshot.val())
            // console.log(childSnapshot.val())
        });
        dispatch(loadPosts(posts))
      })  
    }
}
export function loadPosts(posts){
    return{
        type:'LOAD_POSTS',
        posts
    }
}

export function removePost(index){
return{
    type :'REMOVE_POST',
    index
}
}

export function addPost(post){
    return{
        type:'ADD_POST',
        post
    }
}

export function addComment(comment,postId){
    return{
        type:'ADD_COMMENT',
        comment,
        postId
    }
}
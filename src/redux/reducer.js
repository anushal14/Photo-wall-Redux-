import posts from '../data/posts';

const postReducer = function post(state = posts,action){
    switch(action.type){
        case 'REMOVE_POST': return state.filter(post => post.id !== action.index)
        default: return state
    }
    
}
export default postReducer
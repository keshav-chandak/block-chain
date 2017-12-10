export function incrementLikes(state=[],action){
    switch(action.type){
        case 'INCREMENT_LIKES' : 
        console.log("asd")
            let newLikes = action.likes || 0;
            newLikes++;
            return newLikes;
            break;

        default : return state;
                            
    }
}
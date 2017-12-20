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

export function chains(state=[],action){
    switch(action.type){
        case 'CHAIN_FETCH_DATA_SUCCESS':
            return action.chain;
    
        default: return state;
    
    }
}

export function openModal(state=false,action){
    switch(action.type){
        case 'OPEN_MODAL':
            return action.open;
    
        default: return state;
    
    }
}

export function transfer(state=[],action){
    switch(action.type){
        case 'TRANSFER_SUCCESS':
        console.log("success");
            return action.chain;
    
        default: return state;
    
    }
}
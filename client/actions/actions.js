import axios from 'axios';

export function incrementLikes(likes) {
    return {
        type: 'INCREMENT_LIKES',
        likes: likes
    };
}

export function transferFund(url,from,to,amount){
    return (dispatch)=>{
        console.log(from,to,amount)
        dispatch(chainIsLoading(true));
        return axios({
            url: url,
            timeout: 20000,
            method: 'post',
            responseType: 'json',
            data: {
                from,
                to,
                amount
              }
        })
            .then((response) => { return response.data; })
            .then((chain) => dispatch(transferSuccess(chain)))
            .catch((err) => {
                dispatch(transferError(true))
                console.log(err.message)
            });
    };

}

export function chainDetails(url){
    return (dispatch)=>{

        dispatch(chainIsLoading(true));
        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => { return response.data; })
            .then((chain) => dispatch(chainFetchDataSuccess(chain)))
            .catch((err) => {
                dispatch(chainHasErrored(true))
                console.log(err.message)
            });
    };

}

export function transferSuccess(chain){
    return {
        type: 'TRANSFER_SUCCESS',
        chain
    };
}

export function transferError(bool){
    return {
        type: 'TRANSFER_ERROR',
        bool
    };
}

export function chainFetchDataSuccess(chain) {
    return {
        type: 'CHAIN_FETCH_DATA_SUCCESS',
        chain
    };
}

export function chainIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function chainHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}



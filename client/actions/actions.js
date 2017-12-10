export function incrementLikes(likes) {
    return {
        type: 'INCREMENT_LIKES',
        likes: likes
    };
}
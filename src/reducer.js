export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    //remove it
    // token:null
    // token:"BQCZe6cbMKvQ8FmHRP3E5PVjf13bwyk8AW5AuNSAeV_fWKJ5YOAl2PaNiqbgT_7WUpzCBLudIIQHpdFIRRH0ozlqb53R-ho7C459MCPOZu5MExkbOyj8deMp6tgLB0mJFTQa3yXiXGefdudAQINaeXyZHZwFFaWV3KmA3RzEoAwuNwog8OQgJd7Pdlz6jlALpr1BrGmA6Kxm5s7qVVPT"
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_RUNNING_PLAYLIST":
            return {
                ...state,
                running_playlist: action.running_playlist,
            };

            default:
                return state;
            }
}

export default reducer;
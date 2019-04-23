const defaultState = {
    tagsList: [],
    selectedTags:[]
}

const TagsReducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'STORE_TAGS':
            return {
                ...state,
                tagsList: action.tagsList
            };

        case 'STORE_TAG':
            return {
                ...state,
                tagsList: [
                    action.tag,
                    ...state.tagsList
                ]
            };

        default:
            return state;
    }
}

export default TagsReducer;

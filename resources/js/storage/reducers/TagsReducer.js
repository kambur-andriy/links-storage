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
                    ...state.tagsList,
                    action.tag
                ]
            };

        case 'TOGGLE_TAG':
            if (state.selectedTags.indexOf(action.tagId) !== -1) {
                return {
                    ...state,
                    selectedTags: state.selectedTags.filter(tagId => tagId !== action.tagId)
                }
            }

            return {
                ...state,
                selectedTags: [
                    ...state.selectedTags,
                    action.tagId
                ]
            };

        case 'STORE_LINK':
            return {
                ...state,
                selectedTags: []
            };

        default:
            return state;
    }
}

export default TagsReducer;

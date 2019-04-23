const defaultState = {
    searchString: '',
    selectedTags:[]
}

const FiltersReducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'UPDATE_SEARCH_FILTER':
            return {
                ...state,
                searchString: action.searchString
            };

        case 'UPDATE_TAGS_FILTER':
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
                ...defaultState,
            };

        default:
            return state;
    }
}

export default FiltersReducer;

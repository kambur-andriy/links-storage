const updateSearchFilter = searchString => ({
    type: 'UPDATE_SEARCH_FILTER',
    searchString: searchString
});

const updateTagsFilter = tagId => ({
    type: 'UPDATE_TAGS_FILTER',
    tagId: tagId
});

const resetFilters = () => ({
    type: 'CLEAR_FILTERS',
});


/***************************************************************/


export const changeSearch = searchString => dispatch => {

    dispatch(
        updateSearchFilter(searchString)
    );

};

export const changeTag = tagId => dispatch => {

    dispatch(
        updateTagsFilter(tagId)
    );

};

export const clearAll = () => dispatch => {

    dispatch(
        resetFilters()
    );

};

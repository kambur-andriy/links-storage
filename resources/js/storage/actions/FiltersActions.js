const updateSearchFilter = searchString => ({
    type: 'UPDATE_SEARCH_FILTER',
    searchString: searchString
});

const updateTagsFilter = tagId => ({
    type: 'UPDATE_TAGS_FILTER',
    tagId: tagId
});


/***************************************************************/


export const quickSearch = searchString => dispatch => {

    dispatch(
        updateSearchFilter(searchString)
    );

};

export const filterByTag = tagId => dispatch => {

    dispatch(
        updateTagsFilter(tagId)
    );

};
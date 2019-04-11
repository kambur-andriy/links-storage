import Request from './../../request/Request';

const storeTags = tagsList => ({
    type: 'STORE_TAGS',
    tagsList: tagsList
});

const storeTag = tag => ({
    type: 'STORE_TAG',
    tag: tag
});

const toggleTag = tagId => ({
    type: 'TOGGLE_TAG',
    tagId: tagId
});


/***************************************************************/


export const getTags = () => dispatch => {

    return Request.get(
        '/api/tags',
        {}
    )
        .then(
            response => {

                dispatch(
                    storeTags(response)
                );

            }
        )

}

export const saveTag = formData => dispatch => {

    return Request.post(
        '/api/tag/save',
        formData
    )
        .then(
            response => dispatch(
                storeTag(response)
            )
        )

}

export const selectTag = tagId => dispatch => {

    dispatch(
        toggleTag(tagId)
    );

}
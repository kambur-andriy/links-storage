import Request from './../../request/Request';

const storeLinks = linksList => ({
    type: 'STORE_LINKS',
    linksList: linksList
});

const storeLink = link => ({
    type: 'STORE_LINK',
    link: link
});

const selectLink = linkId => ({
    type: 'SELECT_LINK',
    linkId: linkId
});

/***************************************************************/


export const getLinks = () => dispatch => {

    return Request.get(
        '/api/links',
        {}
    )
        .then(
            response => {

                dispatch(
                    storeLinks(response)
                );

            }
        )

};

export const saveLink = formData => dispatch => {

    return Request.post(
        '/api/link/save',
        formData
    )
        .then(
            response => dispatch(
                storeLink(response)
            )
        )

};

export const editLink = linkId => dispatch => {

    dispatch(
        selectLink(linkId)
    );

}
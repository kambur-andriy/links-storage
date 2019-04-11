const defaultState = {
    linksList: [],
    selectedLink: {
        id: 0,
        name: '',
        url: '',
        tags: []
    }
}

const LinksReducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'STORE_LINKS':
            return {
                ...state,
                linksList: action.linksList
            };

        case 'STORE_LINK':
            const currentLink = state.linksList.find(
                link => link.id === action.link.id
            );

            return {
                ...state,
                linksList: currentLink
                    ? state.linksList.map(
                        link => link.id === action.link.id ? action.link : link
                    )
                    : [
                        action.link,
                        ...state.linksList
                    ]
            };

        case 'SELECT_LINK':
            const selectedLink = state.linksList.find(
                link => link.id === action.linkId
            );

            return {
                ...state,
                selectedLink: {
                    id: selectedLink.id,
                    name: selectedLink.name,
                    url: selectedLink.url,
                    tags: selectedLink.tags.map(tag => tag.id)
                }
            };

        default:
            return state;
    }
}

export default LinksReducer;
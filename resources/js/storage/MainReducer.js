import { combineReducers } from 'redux';
import TagsReducer from './reducers/TagsReducer';
import LinksReducer from './reducers/LinksReducer';
import FiltersReducer from './reducers/FiltersReducer';

const MainReducer = combineReducers({
    'tags': TagsReducer,
    'links': LinksReducer,
    'filters': FiltersReducer
})

export default MainReducer
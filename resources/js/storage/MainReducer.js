import { combineReducers } from 'redux';
import TagsReducer from './reducers/TagsReducer';
import LinksReducer from './reducers/LinksReducer';

const MainReducer = combineReducers({
    'tags': TagsReducer,
    'links': LinksReducer
})

export default MainReducer
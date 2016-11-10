import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';


//has to be 'form'
const rootReducer = combineReducers({
	posts: PostReducer,
	form: formReducer
});

export default rootReducer;

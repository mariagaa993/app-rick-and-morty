export const ACTION_FILTER = "FILTER";

export const reducer = (state, action) => {
    switch(action.type) {
        case ACTION_FILTER:
			return action.payload.data.filter(search => 
				search.name.toLowerCase().indexOf(action.payload.query.toLowerCase()) > -1 || 
				action.payload.query.length < 3); 
        default:
          	return state;
    }
}

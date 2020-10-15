export const ACTION_FILTER = "FILTER";

export const reducer = (state, action) => {
    switch(action.type) {
    	case ACTION_FILTER:
          	return action.payload.data.filter(nameCharacter => 
              	nameCharacter.name.indexOf(
              	action.payload.query) > -1 || 
              	nameCharacter.name.indexOf(action.payload.query) && 
              	action.payload.query.length < 3); 
        default:
          	return state;
    };
}

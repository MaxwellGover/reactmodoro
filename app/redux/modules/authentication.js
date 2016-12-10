const initialState = {
	isAuthed: false,
	isAuthenticating: false,
	authedId: ''
}

// If state is undefined, set it to initialState.
export default function authentication (state = initialState, action) {
	switch (action.type) {
		default : 
			return state
	}
}
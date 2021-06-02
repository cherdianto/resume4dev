const initState = {
    firstName: '',
    lastName: '',
    address: '',
    expertise: '',
    experience: '',
    techStack: '',
    bio: ''
}

const dataReducer = (state = initState, action) => {
    switch(action.type){
        case 'SAVE_DATA':
            console.log('data save success');
            console.log(initState)
            console.log(action.payload);
            const newData = {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                address: action.payload.address,
                expertise: action.payload.expertise,
                experience: action.payload.experience,
                bio: action.payload.bio,
                techStack: action.payload.techStack
            }
            return newData;
        case 'SAVE_DATA_ERROR':
            console.log('data save error');
            return state;
        default:
            return state;
    }
}

export default dataReducer
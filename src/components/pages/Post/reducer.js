const initialState = {
    data: {
        id: '',
        title: '', 
        description: '',
        data_update: '',
        user: {
            id: '',
            name: ''
        },
    },

}

export default (state = initialState, action) => {
   
    switch (action.type) {
        case 'SET_POST':
            return {
                ...state, 
                data: action.post,
            } 
            
    
        default: return state;
    }
    
     
 }
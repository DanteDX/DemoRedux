const initialState = {
    professions:[
        {professionId:1,professionContent:'This is first profession'},
        {professionId:2,professionContent:'This is second profession'}
    ]
};

export const ProfessionReducer = (state = initialState,action) =>{
    const {type,payload} = action;
    switch(type){
        case 'ADD_PROFESSION':
            return 'ADD profession'
        case 'DELETE_PROFESSION':
            return "DELETE profession"
        default:
            return state;
    }
}

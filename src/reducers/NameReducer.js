const initialState = {
    names:[
        {nameId:1,nameContent:'This is first name'},
        {nameId:2,nameContent:'This is second name'}
    ]
};

export const NameReducer = (state = initialState,action) =>{
    const {type,payload} = action;
    switch(type){
        case 'ADD_NAME':
            return 'ADD NAME'
        case 'DELETE_NAME':
            return "DELETE NAME"
        default:
            return state;
    }
}

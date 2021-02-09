const initialState = {
    information:[
        {infoId:1,infoContent:'This is first info'},
        {infoId:2,infoContent:'This is second info'}
    ]
};

export const InfoReducer = (state = initialState,action) =>{
    const {type,payload} = action;
    switch(type){
        case 'ADD_INFO':
            return 'ADD information'
        case 'DELETE_INFO':
            return "DELETE INFORMATION"
        default:
            return state;
    }
}

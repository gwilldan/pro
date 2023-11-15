
type Action = {
    type: string;
    payload?: {
      uid?: string;
      email?: string;
      token?: string;
    }   ;
  };

export const  AuthReducer =(state:any ,action:Action )=>{
    const{type,payload}=action
    switch(type){
        case'REGISTER':
        if(payload?.token){
        localStorage.setItem('token',payload?.token)  
        }  
        return{
            ...state,
            userId:payload?.uid,
            email:payload?.email,
            token:payload?.token
        }
        case'LOGIN':
        if(payload?.token){
            localStorage.setItem('token',payload?.token)  
            }  
            return{
            ...state,
            userId:payload?.uid,
            email:payload?.email,
            token:payload?.token
        }
        case'VERIFY-USER':
        return{
            ...state,
            userId:payload?.uid,
            email:payload?.email,
            token:payload?.token
        }
        case'LOGOUT':
        localStorage.removeItem('token')
        
        return{
            state,
            
        }
        default:

        return(
            state
        )
    }

    
}

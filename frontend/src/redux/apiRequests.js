import  {updateError, updateStart, updateSuccess} from "./userSlide"

import axios from "axios"

export const updateUsers = async(user, dispatch) => {
    dispatch(updateStart());
    try{
        const res = await axios.post("/v1/update", user);
        dispatch(updateSuccess(res.data));
    }
    catch(err){
        dispatch(updateError());
    }
}
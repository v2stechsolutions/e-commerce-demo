import { loginData } from "../../../data/loginData"
import { globalUrlGetFunction } from "../../globalDefination/globalFunctions/globalUrlGetFunction"

export const loginUser = (data, callback) => {
    let Url = 'getLoginData'
    let filteredData=loginData.filter((item)=>
        item.userName === data.email && item.password === data.password
    )?.[0]
    if (!filteredData){
        filteredData = {}
        filteredData.errorMsg = "Invalid Data"
    }
    globalUrlGetFunction(Url, filteredData || {}, callback)
}

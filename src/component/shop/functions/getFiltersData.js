import { filters } from "../../../data/filtersData"
import { globalUrlGetFunction } from "../../globalDefination/globalFunctions/globalUrlGetFunction"

export const getFiltersData = (callback) => {
    let Url = 'getFiltersList'
    globalUrlGetFunction(Url, filters || [], callback)
}

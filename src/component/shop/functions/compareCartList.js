export const isCartUpdated = (newList, oldList) => {
    if (newList.length === oldList.length) {
        let tempArr = newList.filter(compareArray(oldList))
        if (tempArr.length > 0) {
            return true
        } else {
            let flag = false
            newList.forEach(item => {
                oldList.forEach(prd => {
                    if (prd.id === item.id) {
                        if (prd.quantity !== item.quantity) {
                            flag = true
                        }
                    }
                })
            })
            return flag
        }
    } else {
        return true
    }
}

const compareArray = (arrayToCompare) => {
    return function (current) {
        return arrayToCompare.filter(function (element) {
            return element.id === current.id
        }).length === 0;
    }
}
import { ListType } from "./typeDefinition"

const getLength = (List:ListType[], heading:string) => {
    return List.filter((l:ListType) => l.type === heading).length
}

const setColor = (value:string) => {
    switch (value) {
        case "low":
            return "green"
            

        case "medium":
            return "yellow"


        case "high":
            return "orange"
            

        case "veryHigh":
            return "red"
            

        default:
            return "asdf"
            
    }
}

export {setColor, getLength}
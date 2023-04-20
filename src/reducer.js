const reducer = (count, action) => {
    if(action.type === "INC") {
        return(count = count + 1);
    } 
    if(action.type === "DEC") {
        let newNum = 0;
        count >= 1 ? (newNum = count - 1) : (newNum = 0);
        return newNum;
    }
    return StaticRange;
}

export default reducer;
const increase = (count)=>{
    return {
        type:'up',
        count:count
    }
}

const decrease = (count)=>{
    return {
        type:'down',
        count:count
    }
}

export {increase,decrease}
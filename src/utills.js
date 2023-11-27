export function groupBy(array, callBackFn){
    return array.reduce((acc, item) => {
        const key = callBackFn(item);
        (acc[key] ||= []).push(item);
        
        return acc;
    }, {})
}
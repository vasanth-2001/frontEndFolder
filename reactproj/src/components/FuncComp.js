// function FuncComp() {
//     return <h2>This is Function Component</h2>
// }
const FuncComp=(props)=>{
    return <div>
        <h2>This is Function Commponent</h2>
        <p>Name:<strong>{props.fname}</strong> Post:<strong>{props.post}</strong></p>
        </div>
};
export default FuncComp;
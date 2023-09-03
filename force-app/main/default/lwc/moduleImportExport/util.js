// repeated code will be placed in separate js file
function sum(x,y)
{
 return x+y;
}
// if this vairable repeats in component we can keep the separate custom js and we can import in the component
const firstName='AJ Skill';
// export at once
export {sum,firstName}
// export default
//export default firstName
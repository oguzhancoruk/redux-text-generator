
import { useSelector } from 'react-redux'

function Output() {
    const text=useSelector(state=>state.text.items);
   
console.log(text)
   
  return (
    <div className='output'><p>{text}</p></div>
   
  )}

export default Output
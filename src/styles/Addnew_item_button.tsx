import {Main_Task_Container} from "./App"
import {useDispatch} from "react-redux"
import {AppDispatch} from "../store/store"
import  {findItemById} from "../store/hook" 
import {useState, useEffect} from "react"
interface  Props {
    id:string,

}
export const Add_new_Item_button:React.FC<Props> = ({id})=>{
    const dispatch= useDispatch<AppDispatch>()
    const [isInput , setInput] = useState(false)
    const [input, setInputText] = useState('')
    const  InputStyle = Main_Task_Container.AddNew_task_button
    const Dispatch_obj = {
        id: id,
        text: input
    }
    const handleAddText =(event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
            setInput(false)
            dispatch(findItemById(Dispatch_obj))
        }
    }
    return isInput ? <input  style = {{...InputStyle, paddingLeft: "12px", width: "84%", border:  "none" , }}  placeholder = "Enter A Title" onKeyPress={(e)=>handleAddText(e)} onChange = {(e)=>setInputText(e.target.value)}/> 
     :
     <button style = {Main_Task_Container.AddNewItem_Button} onClick = {()=>setInput(!isInput)}>
Add New Item
    </button>
}
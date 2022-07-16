import { Main_Task_Container } from "./App"
import {useDispatch} from "react-redux"
import {AppDispatch} from "../store/store"
import {AddTask} from "../store/hook"
import {useState, useEffect} from "react"
interface Props { 
text: string
}
export const Addnew_task_button:React.FC<Props> = ({text})=> {
    const dispatch = useDispatch<AppDispatch>()
    const handleAddText =(event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
        setInput(!isInput)
        dispatch(AddTask(inputText))
        
        }
    }
    const [inputText, setInputText] = useState('')
    const [isInput, setInput]  = useState(false)
    const  InputStyle = Main_Task_Container.AddNew_task_button
    return <>
 {
  isInput ? <input  style = {{...InputStyle, paddingLeft: "12px", width: "84%", border:  "none" , }}  placeholder = "Enter A Title" onKeyPress={(e)=>handleAddText(e)} onChange = {(e)=>setInputText(e.target.value)}/> :
  <button style = {Main_Task_Container.AddNew_task_button} onClick = {()=>setInput(!isInput)}>
        {text}
    </button> 
}
    </>
}

// onClick = {()=>dispatch(AddTask())}
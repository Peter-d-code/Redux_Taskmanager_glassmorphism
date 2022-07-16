import React, { ReactNode } from "react"
import {Main_Task_Container} from "./App"
import {FiDelete}  from "react-icons/fi";
import {useDispatch} from "react-redux"
import type {AppDispatch} from "../store/store"
import {removeItem} from "../store/hook"
interface Props {
    children?: ReactNode,
    Text:string,
    id:string
}
export const AddNew_item:React.FC<Props> = ({children,Text,id})=>{
    const dispatch = useDispatch<AppDispatch>()
return  <div style = {Main_Task_Container.Item}>
<p style = {{width:"95%"}} >{Text}</p> <FiDelete onClick = {()=>dispatch(removeItem(id))}/>
</div>
}
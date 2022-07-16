import { ReactNode } from "react"
import { Add_new_Item, Main_Task_Container} from "./App"
import {Add_new_Item_button} from "./Addnew_item_button"
import {AddNew_item} from "./Addnew_item"
import type  {Task} from "../store/hook"
import {useDispatch} from "react-redux"
import type {AppDispatch} from "../store/store"
import {removeItem} from "../store/hook"
interface Props {
    children: ReactNode
    title : string,
    id:string
    listItems :  Task[]
}
export const Addnew_task:React.FC<Props>= ({title,id, listItems, children}) => {
    const dispatch = useDispatch<AppDispatch>()
    return  <div style = {Main_Task_Container.main}>
<p style = {Main_Task_Container.title}>{title}</p>
{listItems.map(args => args.text.length>0 ? <AddNew_item Text = {args.text}  id={args.id}/>: null)}

<Add_new_Item_button id = {id} />
    </div>
}
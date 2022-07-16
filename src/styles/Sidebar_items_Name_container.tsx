import { ReactNode } from "react"
import { Main_Task_Container } from "./App"
interface Props {
    children: ReactNode,

}
export const Sidebar_title_name_container:React.FC<Props>  = ({children}) => {


    return  <div style = {Main_Task_Container.Sidebar_title_name_container}> 
{children}
    </div>
}
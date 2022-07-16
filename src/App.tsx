import React from 'react';
import "./index.css"
import {Main_container, Main_Card_container,Card_Side_Bar,side_bar_nav,Main_Task_Container,Taskmanager,nav_options, Add_new_Item} from "./styles/App"
import {Addnew_task} from "./styles/AddNewtask"
import {Addnew_task_button} from "./styles/AddNew_task_button"
import {Sidebar_title_name_container} from "./styles/Sidebar_items_Name_container"
import {useSelector, useDispatch} from "react-redux"
import type {RootState, AppDispatch} from "./store/store"

function App() {
  const store = useSelector((state:RootState )=>state.RootState.List)
  return (
  <div style = {Main_container}>
<div style = {Main_Card_container}>
  <div style = {Card_Side_Bar}>
  <div style={side_bar_nav}>
{["#ED6A5E", "#F3BC4F", "#61C454"].map(args=><div style = {{...nav_options, backgroundColor: `${args}`}} key = {args}></div>)}
  </div>
  <Sidebar_title_name_container>
    {store.map(args=><div style = {{width: "95%", height: "70px", display:"flex", justifyContent: "center", alignItems: "center", fontSize:"2rem", color: "white", letterSpacing: "1.5px", marginTop: "7px",marginBottom: "7px", backdropFilter: "blur(20px) saturate(280%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(195, 150, 196, 0.1)",borderRadius: "10px", marginLeft: "2.5%"}} className = "divtag">{args.text}</div>)}
  </Sidebar_title_name_container>
  <Addnew_task_button text = {"Add New Task "} />
  </div>

  <div style={ Taskmanager}>

{store.map((args,index)=>
{
  return <Addnew_task title = {args.text} id = {args.id} listItems = {args.task}>
  </Addnew_task>
}
)}

  </div>
</div>
  </div>
  );
}

export default App;

import Dark from "../images/Dark.jpg"
export const Main_container = {
width: "100%",
height: "100vh",
// backdropFilter: "blur(12px) saturate(166%)",
// backgroundColor: '#2a2a72',
backgroundImage: `url(${Dark})`,
display: "flex",
justifyContent: "center" as "center",
alignItems: "center" as "center",
}

export const Main_Card_container = {
    backdropFilter: "blur(25px) saturate(180%)",
    WebkitBackdropFilter: "blur(25px) saturate(180%)",
    backgroundColor: "rgba(3, 0, 25, 0.66)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    width: "90%",
    display: "grid",
    gridTemplateColumns: "25% 72.5%",
    gridTemplateRows: "100%",
    alignItems: "center",
    height: "95%",
    gridTemplateAreas: '"sidebar Card_container"',
    gridColumnGap: "2.5%",
    gridRowGap: "2.5%"
}

export const Card_Side_Bar = {
    backdropFilter: "blur(25px) saturate(180%)",
    WebkitBackdropFilter: "blur(25px) saturate(180%)",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius:  "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    gridArea: "sidebar",
    width: "100%",
    height: "100%",
    flexDirection : "column" as "column",

}

export const side_bar_nav = {
    width: "80%", height: "40px", backgroundColor: "transparent",
    display: "flex",
    justifyContent: "flex-start",
    alignItems : "center" as "center",
    marginLeft: "2%",
    marginTop: "1%"

}
export const nav_options = {
    width: "18px",
    height: "18px",
    backgroundColor: "white",
    borderRadius: "50%",
    marginLeft: "10px"
}
export const Taskmanager = {
    gridArea: "Card_container",
    width: "96%",
    height: "94.5%",
    backdropFilter: "blur(25px) saturate(180%)",
    WebkitBackdropFilter: "blur(25px) saturate(180%)",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    padding: "2%",
    overflowY: "scroll" as "scroll",
    display: "flex",
    flexWrap : "wrap" as "wrap",
    justifyContent: "space-around",
    // display: "flex",
    // alignItems: "center"
}
interface card_containerv_{
main: object,
title : object,
AddNewItem_Button: object,
Item : object,
AddNew_task_button :object,
Sidebar_title_name_container : object
}
export const  Main_Task_Container:card_containerv_ = {
    main : {
    width: "35%",
    backdropFilter: "blur(20px) saturate(280%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(195, 150, 196, 0.1)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    display: "flex",
    justifyContent: "flex-start" as "flex-start",
    flexDirection: "column" as "column",
    alignItems :"center" as "center",
    fontFamily: 'Lato', 
    fontSize: "1.6rem",
   textTransform: "capitalize"  as "capitalize",
    color:" whtie",
    padding: "0",
    letterSpacing : "2.5px",
    marginBottom: "20px",
    flexGrow: "0"
    },
title : {
    width: "80%",
    height: "5%",
    display: "flex",
    justifyContent: "center"as "center",
    alignItems: "center" as "center",
    backgroundColor :"transparent",
    color: "white",
    borderBottom: " 4px solid #110A2B",
    paddingBottom : "15px",
},
AddNewItem_Button : {
width: "90%",
height: "60px",
display: "flex",
justifyContent: "center"as "center",
alignItems: "center" as "center",
fontSize: "1.2rem",
color: "white",
backdropFilter: "blur(25px) saturate(180%)",
WebkitBackdropFilter: "blur(25px) saturate(180%)",
backgroundColor: "rgba(3, 0, 25, 0.66)",
borderRadius:  "12px",
marginBottom: "10px",
boxShadow: "1px 0.90px 5px -1px rgba(18,11,219,0.75)" ,
border:" none",
},
Item:{
    width: "80%",
    height: "40px",
    display: "flex",
    backdropFilter: "blur(20px) saturate(280%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(195, 150, 196, 0.1)",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    alignItems: "center" as "center",
    fontSize: "1.2rem",
    color: "white",

    padding: "10px",
    margin: "10px 10px ",
}
,
AddNew_task_button: {
    width: "90%",
    height: "60px",
    display: "flex",
    justifyContent: "center"as "center",
    alignItems: "center" as "center",
    fontSize: "1.2rem",
    color: "white",
backdropFilter: "blur(25px) saturate(180%)",
WebkitBackdropFilter: "blur(25px) saturate(180%)",
backgroundColor: "rgba(3, 0, 25, 0.66)",
borderRadius: "12px",
marginLeft: "5%",
marginTop: "5%",
border: "none",
},
Sidebar_title_name_container : {
    width: "85%",
    display: "flex",
    minHeight: "100px",
    Maxheight: "80%",
    height: "80%",
    backdropFilter: "blur(20px) saturate(280%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(195, 150, 196, 0.1)",
    borderRadius: "12px",
    marginLeft: "7.5%",
    overflowY: "scroll" as "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    webkitScrollbar: "none",
    marginTop: "20px",
    flexWrap : "wrap" as "wrap",
    
}
}

const Add_New_Task = {

}

export const Add_new_Item = {
    width: '100%',
    height: "50px",
    
}

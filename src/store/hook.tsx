import  {Action, createSlice, nanoid, PayloadAction}  from  "@reduxjs/toolkit"
export interface  Task {
id:string,
text: string
}
interface List {
id:string,
text: string,
task : Task[]  
}


interface initialState_  {
List: List[],
}
export const initialState:initialState_  = {
List: [],
}
export const Slice = createSlice({
    name : "List",
    initialState,
    reducers: {
      AddTask : (state:initialState_, action:PayloadAction<string>)=>{
        state.List.push({
            id: nanoid(),
            text: action.payload,
            task: []
        })
      },
      removeItem: (state:initialState_,  action:PayloadAction<string>)=>{
      state.List.map(args => {

      args.task.map(args_=> args_.id === action.payload ? args_.text='':null)
      })
      console.log(state)
      },
      findItemById : (state:initialState_, action:PayloadAction<{id:string, text: string}>)=>{
  const Found = state.List.forEach(e=> e.id === action.payload.id ? e.task.push({
    id: nanoid(),
    text: action.payload.text
  }) : null)

      }
      }
    })

    export const {reducer, actions} = Slice
    export const {AddTask, removeItem, findItemById} = Slice.actions
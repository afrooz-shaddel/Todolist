import Icon from "./SvgIcon";
import './footer.css'
import { toast } from "react-toastify";
import { useState , useEffect } from "react";
export default  function Footer(){
let [Create , setCreate]=useState(false)
let [Edit , setEdit]=useState(false)
let [value , setValue]=useState("")
let [valueEdit , setValueEdit]=useState('')
let [Todos , setTodos]=useState([])
useEffect(()=>{
  let newLocal= JSON.parse(localStorage.getItem("todolist"))
  console.log(newLocal)
  if(newLocal.length>0){
  setTodos(newLocal)
  }
   },[])

useEffect(()=>{
localStorage.setItem("todolist" , JSON.stringify(Todos))
},[Todos])

// "complete todo"
 function checkBoxHandeler(id){
   let newComplete=Todos.map(item=>{
    if(item.id===id){
      item.complete=!item.complete
    }
    return item
   })
   setTodos(newComplete)}
    
//  open Modoal Create
 function addCreateTodo(){
       setCreate(true)
    }

    // "add Todo"
    function addTodo(event){
    event.preventDefault();
    let newTodoObject={id:new Date().getTime() ,
      todo:value,
      complete:false
    }
  
    
   if(Todos){
    let md= Todos.some(item=>item===value)
    // prevent duplicate data

   
    if(md){
     
      setValue("")
      
      return true
    }else{
      if(value.length===0){
        toast.success("success") 
    }else{
    
        setTodos([...Todos].concat(newTodoObject))
       setValue("")
       if(value.length===0){
        toast.success("success") 
    }else{
     
      setTodos([...Todos].concat(newTodoObject))
       setValue("")
       setCreate(false)

    }

    }
    }
   }
    
   

    
    }

    function valueEditHandeler(){

    }

    // "remove Item"
    function removeItem(id){
      let removeTodo= Todos.filter(item=>item.id!==id)
       setTodos(removeTodo)
    }
    // "remove space in input"
    function TransferValueTodo(event){
        let newTodo=event.target.value.trim()
      setValue(newTodo)
       
    }

   
    function editHandeler(id1){
     setEdit(true)
     let newTodo1= Todos.find(item=>item.id===id1)
     setValueEdit(newTodo1.todo)
    }
   

    useEffect(()=>{

      const close=(e)=>{
        
        if(e.keyCode===27 || e.keyCode===13){
          setCreate(false)
        }
      }
       window.addEventListener("keydown" ,close)
    },[])


    return(
        <>
        {/* "add Todo" */}

        {Todos.length>0 && Todos.map(item=><div className='todoItem ' key={item.id}>
            <div className="todoCheckBox">
                 <input   type="checkbox" onChange={()=>checkBoxHandeler(item.id)} checked={item.complete}/>
            <div className={`${item.complete? 'todoCompleteLine':''}`}> {item.todo} </div> </div>
              <div className="todoIcon">
        <button onClick={()=>editHandeler(item.id)}><Icon item={'M16.0354 3.01467C17.16 1.88995 18.9556 1.84497 20.134 2.87971L20.278 3.01467L20.9851 3.72177C22.1098 4.84649 22.1548 6.64205 21.1201 7.82042L20.9851 7.96441L9.77281 19.1767C9.61378 19.3357 9.42155 19.4564 9.21077 19.5307L9.04943 19.5776L4.59453 20.6057C3.91174 20.7632 3.29593 20.1918 3.37445 19.5184L3.39408 19.4053L4.42213 14.9503C4.4727 14.7312 4.57173 14.527 4.71109 14.3523L4.82306 14.227L16.0354 3.01467ZM15.3282 6.55026L6.33867 15.5398L5.70227 18.2975L8.45999 17.6611L17.4495 8.67158L15.3282 6.55026ZM18.8638 4.42888C18.5033 4.0684 17.9361 4.04067 17.5438 4.34569L17.4496 4.42888L16.7424 5.13605L18.8637 7.25737L19.5709 6.5502C19.9314 6.18972 19.9591 5.62249 19.6541 5.2302L19.5709 5.13599L18.8638 4.42888Z'}/></button> 
       <button onClick={()=>removeItem(item.id)}><Icon  item={'M14.2792 2C15.1401 2 15.9044 2.55086 16.1766 3.36754L16.7208 5H20C20.5523 5 21 5.44772 21 6C21 6.55227 20.5523 6.99998 20 7L19.9975 7.07125L19.1301 19.2137C19.018 20.7837 17.7117 22 16.1378 22H7.86224C6.28832 22 4.982 20.7837 4.86986 19.2137L4.00254 7.07125C4.00083 7.04735 3.99998 7.02359 3.99996 7C3.44769 6.99998 3 6.55227 3 6C3 5.44772 3.44772 5 4 5H7.27924L7.82339 3.36754C8.09562 2.55086 8.8599 2 9.72076 2H14.2792ZM17.9975 7H6.00255L6.86478 19.0712C6.90216 19.5946 7.3376 20 7.86224 20H16.1378C16.6624 20 17.0978 19.5946 17.1352 19.0712L17.9975 7ZM10 10C10.5128 10 10.9355 10.386 10.9933 10.8834L11 11V16C11 16.5523 10.5523 17 10 17C9.48716 17 9.06449 16.614 9.00673 16.1166L9 16V11C9 10.4477 9.44771 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V11C13 10.4477 13.4477 10 14 10ZM14.2792 4H9.72076L9.38743 5H14.6126L14.2792 4Z'}/></button> 
         </div>
    
        </div>)}

        {/* "modal creat todo" */}
         { Create && <div className={`ModalCreat ${Create ?'visible':'invisible'}`}   >
         <p className="titleForm">New!</p>
                  <form action="" >
                    
                     <input type="text"  onChange={TransferValueTodo} value={value} />
                     <div className="btnForm">
                     <button className="addBtnCreateTodo" onClick={addTodo}>Add</button>
                     <button className="canceleBtnCreateTodo" onClick={()=>setCreate(false)}>Cancel</button>
                     </div>
                  </form>

           </div>}
 {/* "modal edit todo" */}
           { Edit && <div className={`ModalCreat ${Edit ?'visible':'invisible'}`}   >
         <p className="titleForm">Edit!</p>
                  <form action="" >
                    
                     <input type="text"  onChange={valueEditHandeler} value={valueEdit} />
                     <div className="btnForm">
                     <button className="addBtnCreateTodo" >Save</button>
                     <button className="canceleBtnCreateTodo" onClick={()=>setEdit(false)}>Cancel</button>
                     </div>
                  </form>

           </div>}



           <button className="footerbtn" onClick={addCreateTodo}>
            <Icon item={"M10.5 20a1.5 1.5 0 003 0v-6.5H20a1.5 1.5 0 000-3h-6.5V4a1.5 1.5 0 00-3 0v6.5H4a1.5 1.5 0 000 3h6.5V20z"}/>
              
           </button>
        </>
    )
}
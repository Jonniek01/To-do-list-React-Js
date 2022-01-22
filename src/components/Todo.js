import React,{useState} from 'react';
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Todo({todos,completeTodo,removeTodo,updateTodo}) {
    const[edit,setEdit]=useState({
        id:null,
        value:''
    
    });
    const submitUpdate= value=>{
        updateTodo(edit.id,value)
        setEdit({
            id:null,
            value:""
        }

        )
    }
    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }




    return todos.map((todo,index)=>(
        <div className={todo.isComplete?'todo-row complete':'todo-row'}
         key={index}>
             <div key={todo.id} onClick={()=>completeTodo(todo.id)}>{todo.id},{todo.text}</div>
                <div className='12,ccicons'>
                    <RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className="delete-con"/>
                    <TiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})} className="delete-con"/>
                </div>
        </div>
    )

    );
}

export default Todo;
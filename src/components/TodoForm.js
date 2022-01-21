import React,{useState} from 'react';
function TodoForm(props) {
    const[input,setInput]=useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random()=10000),
        //     text:input
        // });
         setInput("Added");

    };
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    return (  
        <form className='todo-form'onSubmit={handleSubmit}>
            <input type='text' placeholder='Add To DO'
            value={input} name='text' className='todo-Input' onChange={handleChange}>

            </input>
            <button className='todo-button'>Add To DO</button>

        </form>
    );
}

export default TodoForm;
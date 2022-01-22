import React,{useState} from 'react';
function TodoForm(props) {
    const[input,setInput]=useState('');
    const [id, setId] = useState(0);
    const giveId=()=>{
        setId(id + 1)
        return id;
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        props.onSubmit({
            id: giveId(),
            text:input
        });
         setInput("");

    };
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    return (  
        <form className='todo-form'onSubmit={handleSubmit}>
            <input type='text' placeholder='Add To DO' name='text'
            value={input}  className='todo-Input' onChange={handleChange}>

            </input>
            <button className='todo-button'>Add To DO</button>

        </form>
    );
}

export default TodoForm;
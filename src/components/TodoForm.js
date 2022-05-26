import React,{useState,useEffect,useRef} from 'react';
function TodoForm(props) {
    const[input,setInput]=useState('');
    const [id, setId] = useState(1);
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
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
            value={input} id="todi"  className='todo-Input' onChange={handleChange}
            ref={inputRef}>

            </input>
            <button className='todo-button'>Add To DO</button>

        </form>
    );
}

export default TodoForm;
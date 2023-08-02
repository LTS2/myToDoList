import React,{usetodoState} from "react";
import { useDispatch } from "./Reducer";

function Create(){
    const [open, setOpen] = usetodoState();
    const [value, setValue] = usetodoState("");
    const dispatch = useDispatch();
    const nextId = useNextId();

    const onToggle = () => setOpen(!open);
    const handleChange = (e) => setValue(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id : nextId.current,
                text : value,
                done : false
            }
        });
        nextId.current += 1;
        setOpen(false);
        setValue('');
    };

    return(
        <>
        {open && (
        <div>
            <form onSubmit={handleSubmit} method="POST">
                <input value={value}
                onChange={handleChange}
                placeholder="앞으로 할 일을 작성해주세요."/>
            </form>
        </div>
    )}
        <button onClick={onToggle} open={open}>
            <IconMd />
        </button>

        </>
    )
    
}

export default Create;
import React from 'react'
import './components.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react'

  const useStyles = makeStyles({
    TextField: {
        width: 500,
    },
  });


const AddTodo = ({addTodo}) => {

    const classes = useStyles();
    const addNewTodo = (e) =>{
        e.preventDefault();
        if(!newTodo) return;
        addTodo(newTodo);
        setNewTodo('');
        
    }

    const [newTodo, setNewTodo] = useState('');


    return (
        <div className='add_todo_container'>
            <form noValidate autoComplete="off" onSubmit={addNewTodo}>
                <TextField className={classes.TextField} id="outlined-basic"
                 label="Outlined" variant="outlined"
                 value={newTodo} onChange={e => setNewTodo(e.target.value)} />

                <Button variant="contained" color="primary" type="submit">
                    Add Todo
                </Button>

            </form>   
        </div>
    )
}

export default AddTodo

import React from 'react'
import './components.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    maxWidth: 900,
    margin: 'auto',
  },
});

function createData(SL, Todo, Action) {
  return { SL, Todo, Action };
}


const TodoList = ({todos, removeTodo}) => {
    const classes = useStyles();
    let sl = 1;
    const doneTodo = (id) =>{
        removeTodo(id);
    }

    return (
        <div className='todo_list_container'>
             <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>SL</TableCell>
                        <TableCell align="center">Todo</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {todos.map((todo) => (
                        !todo.isCompleted ?
                        <TableRow key={todo.id}>
                            <TableCell component="th" scope="row">
                                {sl++}
                            </TableCell>
                            <TableCell align="center">{todo.todo}</TableCell>
                            <TableCell align="right">
                            <Button variant="contained" color="secondary" onClick={()=>doneTodo(todo.id)}>
                                Done
                            </Button>
                            </TableCell>
                        </TableRow>
                        : <p></p>
                        
                        
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </div>
    )
}

export default TodoList

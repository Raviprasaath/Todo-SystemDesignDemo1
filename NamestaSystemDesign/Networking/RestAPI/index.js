import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const PORT = 4521;

let todos = [
    {
        id: '1',
        title: "Todo 1",
        completed: false
    },
    {
        id: '2',
        title: "Todo 2",
        completed: true
    },
]

// READ
app.get('/todos', (req, res) => {
    res.json(todos)
})

// CREATE
app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({
        message: 'New Todo Added!'
    });
})

// UPDATE
app.put('/todos/:id', (req, res) => {
    const newTodoData = req.body;
    const todoIndex = req.params.id;
    const todoDataIndex = todos.findIndex(item => {
        return item.id === todoIndex
    }
    );
    if (todoDataIndex !== -1) {
        todos[todoDataIndex] = {
            id: todoIndex,
            ...newTodoData
        }
        
        res.json({
            message: 'Todo Completed Successfully!'
        })
    } else {
        res.status(400).json({
            message: 'Todo ID does not exist'
        })
    }
})

// DELETE
app.delete('/todos/:id', (req, res) => {
    const deleteIndex = req.params.id;
    // todos = todos.filter(item => item.id !== deleteIndex);
    
    // alter way to delete
    const todoIndex = todos.findIndex((item) => item.id === deleteIndex);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
    }

    res.json({
        message: 'Todo deleted Successfully'
    })
})



app.all('/', (req, res) => {
    res.send('I am Home page')
})

app.listen(PORT, () => {
    console.log(`App is running in PORT ${PORT}`)
});


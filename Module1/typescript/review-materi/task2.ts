class Task {
    public id: number
    public title: string
    public completed: boolean = false
    public createdAt: Date = new Date()

    constructor(id: number, title: string) {
        this.id = id
        this.title = title
    }

    markAsCompleted(): void {
        this.completed = true
    }
}

class WorkTask extends Task {
    constructor(id: number, title: string, deadline: Date, assignedTo: string) {
        super(id, title)
    }
}
class PersonalTask extends Task {
    constructor(id: number, title: string, priorityLevel: 'High' | 'Medium' | 'Low') {
        super(id, title)
    }
}

class TodoList {
    private tasks: Task[] = []

    addTask(task: Task): void {
        this.tasks.push(task)
    }

    completeTask(id: number): void {
        const task = this.tasks.find((value) => value.id === id)
        if (task) {
            task.markAsCompleted()
        }
    }

    filterByType(type: "WorkTask" | "PersonalTask"): Task[] {
        return this.tasks.filter((value) => value.constructor.name === type)
    }

    getAllTodos(): Task[] {
        return this.tasks
    }

    // filterDueSoon(): WorkTask[] {
    //     return this.tasks.filter((value) => value instanceof WorkTask && value)
    // }
}

const todo = new TodoList()
todo.addTask(new WorkTask(1, "Finish report part1", new Date("2025-09-21"), "Budi"))
todo.addTask(new WorkTask(2, "Finish report part2", new Date("2025-09-22"), "Budi"))
todo.addTask(new PersonalTask(3, "Buy groceries", "High"))

console.log(' ---- get all tasks ---- ')
console.log('retrieve all tasks : ',todo.getAllTodos())
console.log(' --- completing task ---')
todo.completeTask(1)
console.log('after completing task : ', todo.getAllTodos())
console.log(' --- filter by task type ---')
console.log('retrieve all worktask : ', todo.filterByType("WorkTask"))
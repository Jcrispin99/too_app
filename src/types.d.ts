export interface Todo {
  id: string | number
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]
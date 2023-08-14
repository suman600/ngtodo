export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

export interface Alert {
  message: string;
  type: string;
}

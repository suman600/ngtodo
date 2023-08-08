export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
  deleted: boolean;
}

export interface Alert {
  message: string;
  autoClose: boolean;
  show: boolean;
  type: string;
}

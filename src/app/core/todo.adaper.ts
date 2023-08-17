export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

export interface Alert {
  message: string;
  type: string;
}

export interface Modal {
  show: boolean;
  title: string;
  action: string;
}

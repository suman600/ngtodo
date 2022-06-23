export interface TodoItem {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoModalItem {
  showModal: boolean;
  modalTitle: string;
  modalActionText: string;
}

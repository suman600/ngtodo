export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  deleted: boolean;
}

export interface TodoModalItem {
  showModal: boolean;
  modalTitle: string;
  modalActionText: string;
}

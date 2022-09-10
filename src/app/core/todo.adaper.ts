
export interface TodoUIModal {
    showModal: boolean;
    modalTitle: string;
    modalActionText: string;
}

export interface TodoDataModel {
    id: string;
    title: string;
    completed: boolean;
    deleted: boolean;
}
export interface TodoId {
    id: string;
}


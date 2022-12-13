
// export interface TodoUIModal {
//     showModal: boolean;
//     modalTitle: string;
//     modalActionText: string;
// }

export interface Modal {
    show: boolean;
    type: string;
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


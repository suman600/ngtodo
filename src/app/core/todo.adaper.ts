import { baseModal } from "./todo.type";
import { propertyMaps } from "./mapping-framework";
import { Validator as _ } from "./validator";


export class TodoData extends baseModal {
    @propertyMaps('id', _.str)
    public id;
}

setupModel(TodoData, {});
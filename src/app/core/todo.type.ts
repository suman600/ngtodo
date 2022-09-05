import { Projector } from "./projector";
import { MappingFrameWorkException, ModelMapper } from "./mapping-framework";


interface TodoData {
    type: string;
}

export function validateMetadata(subclass) {
    if (!subclass.__metadata || !subclass.__metadata.hasOwnProperty('type')) {
        throw '__metadata must have a key \'type\'';
    }
}

export class baseModel {
    static __metadata: TodoData;
    static __projection;
    static adapt;
}

export function setupModel(modelObj, params, customAdapt?) {

    if (customAdapt) {
        modelObj.adapt = customAdapt;
    } else {
        modelObj.adapt = function (rawObj, _forceNotEmptyObjectArrays, cacheStore?) {
            try {
                return new ModelMapper(modelObj, _forceNotEmptyObjectArrays, cacheStore).map(rawObj);
            } catch (err) {
                console.error(err);
                throw new MappingFrameWorkException(`in MODEL: ${modelObj.name}`);
            }
        };
    }

    if (params) {
        if (params.__projection) {
            modelObj.__projection = Projector.createProjection(modelObj.adapt({}, true));
        }

        if (params.type !== undefined) {
            modelObj.__metadata = { type: params.type }
        }
    }
}
import { Validator as _ } from "./validator";

// ModelMapper
export class ModelMapper {
    _propertyMapping: any;
    _target: any;
    _forceNotEmptyObjectArrays: any;
    _cacheStore: any;

    constructor(type: any, _forceNotEmptyObjectArrays, cacheStore) {
        this._target = new type();
        this._cacheStore = cacheStore;
        this._propertyMapping = this._target.constructor._propertyMap;
        this._forceNotEmptyObjectArrays = _forceNotEmptyObjectArrays;
    }

    map(source) {
        Object.keys(this._propertyMapping).forEach((key) => {
            const mappedKey = this._propertyMapping[key];
            if (mappedKey) {

                let isArray = Array.isArray(source);
                let transformSource = source;
                if (!isArray && source) {
                    for (let propertyName of mappedKey.sourceProperty) {
                        transformSource = source[propertyName];
                        if (source[propertyName]) { break; }
                    }
                }
                if (typeof mappedKey.mapperFn === 'function') {
                    try {
                        this._target[key] = mappedKey.mapperFn(transformSource, this._forceNotEmptyObjectArrays, this._cacheStore);
                    } catch (err) {
                        console.error(err);
                        throw new MappingFrameWorkException(`in MODEL: ${this._target.constructor.name}`);
                    }
                } else {
                    this._target[key] = transformSource;
                }
            }
        });

        return this._target;
    }
}

// propertyMaps
export function propertyMaps(sourceProperty?: string | any, mapperFn?: any, projectionType?: any) {
    return function (target: any, propertyKey: string) {
        if (!target.constructor._propertyMap) {
            target.constructor._propertyMap = {};
        }

        if (sourceProperty && !Array.isArray(sourceProperty)) {
            sourceProperty = [sourceProperty]
        }

        target.constructor._propertyMap[propertyKey] = { sourceProperty: sourceProperty || [propertyKey], mapperFn, projectionType };
    }
}

export class MappingFrameWorkException {
    message = '';
    constructor(message) {
        this.message = message;
    }
}
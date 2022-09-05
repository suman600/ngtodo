export class Projector {
    //checks if a projection is valid
    public static validateProjection(__projection) {
        if (typeof __projection === 'object' && !(__projection instanceof Array)) {
            let __projectionKeys = Object.keys(__projection);
            for (var key of __projectionKeys) {

                if (__projection[key] !== 1 &&
                    !Projector.validateProjection(__projection[key])) {
                    return false;
                }
            }

            return true;
        }
        return false;
    }
    public static createProjection(obj) {
        if (Object.keys(obj).length > 0) {
            return Projector.hollowOut(obj);
        }
        throw 'An empty object cannot be used to create a projection';
    }
}
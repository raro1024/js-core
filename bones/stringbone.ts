import {Bone} from "./bone";

export class stringBone extends Bone {

    constructor({multiple = false, defaultValue= undefined, required = false}={}) {
        super(multiple = multiple, defaultValue= defaultValue, required = required);
    }


}

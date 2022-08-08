import bdTips from "../infra/bd.js";

class Tips {
    constructor(tip) {
        this.id = bdTips.length + 1;
        this.tip = tip;
    }
}

export default Tips;
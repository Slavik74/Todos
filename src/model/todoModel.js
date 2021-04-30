import uuidv4 from '../utils.js'
export default class TodoModel {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
        this.complete = false;
    }
}
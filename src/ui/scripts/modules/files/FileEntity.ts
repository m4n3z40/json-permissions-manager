export default class FileEntity {
    id?: string;
    name: string;
    path: string;

    constructor(file: {id?: string, name: string, path: string}) {
        this.id = file.id;
        this.name = file.name;
        this.path = file.path;
    }
}

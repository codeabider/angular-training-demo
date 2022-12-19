let instanceCount = 0;

export class IDService {
    public id: number = 0;

    constructor() {
        instanceCount++;
        console.log('service: times instantiated: ', instanceCount);
    }

    setID(id: number): void {
        console.log('service set id: ', id)
        this.id = id;
    }

    getID(): number {
        console.log('service get id: ',this.id)
        return this.id;
    }
}
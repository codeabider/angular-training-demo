import { LoggerService } from "./logger.service";

let instanceCount = 0;

// TODO: demonstrate error when we try to inject LoggerService w/o decorator
export class IDService {
    public id: number = 0;
    loggerService: LoggerService;

    constructor() {
        instanceCount++;
        this.loggerService = new LoggerService();
        this.loggerService.log('service: times instantiated: ', instanceCount);
    }

    setID(id: number): void {
        this.loggerService.log('service set id: ', id)
        this.id = id;
    }

    getID(): number {
        this.loggerService.log('service get id: ',this.id)
        return this.id;
    }
}
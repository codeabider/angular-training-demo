import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

let instanceCount = 0;

// TODO: demonstrate need of providedIn & `root` vs `any`
@Injectable({
    providedIn: 'root'
})
export class IDService {
    public id: number = 0;

    constructor(private loggerService: LoggerService) {
        instanceCount++;
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
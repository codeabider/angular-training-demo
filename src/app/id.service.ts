import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoggerService } from "./logger.service";

let instanceCount = 0;

// TODO: demonstrate need of providedIn & `root` vs `any`
@Injectable({
    providedIn: 'root'
})
export class IDService {
    private id: number = 0;
    private idSubject = new BehaviorSubject<number>(this.id);

    constructor(private loggerService: LoggerService) {
        instanceCount++;
        this.loggerService.log('service: times instantiated: ', instanceCount);
    }

    getIDSubject(): BehaviorSubject<number> {
        return this.idSubject;
    }

    setID(id: number): void {
        this.loggerService.log('service set id: ', id)
        this.id = id;
        this.idSubject.next(id);
    }

    getID(): number {
        this.loggerService.log('service get id: ',this.id)
        return this.id;
    }
}
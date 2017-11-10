import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

log(){
    console.log('iam the logging');
}
constructor() { }

}
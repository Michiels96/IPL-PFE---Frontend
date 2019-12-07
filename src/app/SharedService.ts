import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    data;
    constructor(){
      this.data= {};
    }

    setData(val: object){
        this.data= val;
    }

    getData(){
        return this.data;
    }
}
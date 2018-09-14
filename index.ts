import {a} from "./wm/index";
/* import * as faker from "faker";
faker.address */
// do something with ptr ...
// ... and free it again
export const b:number=a; 
export const len:number= 3;
declare namespace window {
    
    export function alert(v: number): void;
    export function prompt(v: string,s:f64):void;

}




declare namespace Math{

    export function max(a:number,b:number):number
}



export function init(w_: number, h_: number): number {
    var  w = w_;
    var h = h_;
    return w*h;
}
export function add(x:number,y:number):number{
    var j:number=1
    for(var i:number=0;i<len;i++){
        j=j+i
    }
    
  //  const aaa="444"
    //window.prompt(aaa,j)
   // window.console("aaaaaa")
    return j
}

export function test():f64{

    return Math.max(123,1234)
}
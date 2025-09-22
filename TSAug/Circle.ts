/// <reference path ="./IShape.ts"/>

// Import the IShape interface from the Drawing namespace
//import { IShape } from "./IShape";



    export class Circle implements IShape{
        public draw():void{
            console.log("Circle is drawn");
        }
    }

// pipe personabliser pour limiter la quantité de mots 

import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:"truncateWords"
})

export class TruncateWords implements PipeTransform {
    transform(value: string) : string {
        if(!!value) {
            return value.slice(0,200) // on peut modiifer la quantée des mots 
        }
        else
            return ""
    }
}
import {PipeTransform,Pipe} from '@angular/core'



@Pipe({
    name:'myabout'
})
export class InfoPipe implements PipeTransform
{
    transform(value: any) {
        let about:string = value+'';


        let formattedAbout:string = '';

        formattedAbout = about.slice(0,10)+'....';
                                   
                                          
        console.log('pipe method '+formattedAbout);
        return formattedAbout;

    }
}
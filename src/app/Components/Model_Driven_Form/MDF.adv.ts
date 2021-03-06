import { Component,EventEmitter } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
selector: 'my-ad-mdf',
templateUrl: `./MDF.html`,
outputs: ['childEvent']
})

export class MDFAdvFormComponent{
 
    YourName:string="Aishwarya";
    Category:string[] =["Car","Mobile","Bike","Real Estate","Camera","Books","Laptops"];

    name2:any;
    cat2:any;
    desc2:any;

    obj:any;

    AdForm =new FormGroup({
      
        name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        desc: new FormControl()
    });

    onsubmit()
{
    console.log(this.AdForm.value);
}

    AdDetails_All(name:any,cat:any,desc:any):void
    {

        console.log("name: ",name,"cat: ",cat,"description: ",desc);

        this.obj.push({Name:name,
                    Category : cat,
                     Description: desc,
                });
        console.log("Object", this.obj);

        for (let i = 0; i < this.obj.length; i++)
        {
            console.log(this.obj[i]);
        }

    }

    public childEvent= new EventEmitter<any>();
    onChange(name:any,cat:string,desc:any) 
    { 

        let newobj =
        {
            newName:name,
            newCat:cat,
            newDesc:desc
        }

       this.childEvent.emit(newobj);

    } 

 }
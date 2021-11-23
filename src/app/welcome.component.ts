import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit
{
    buttonText: string = "Click me for a surprise :)";

    ngOnInit(): void {
        console.log('this is me saying hi');        
    }

    onButtonClick() : void{
        this.buttonText = "You are awesome today!";
    }

}

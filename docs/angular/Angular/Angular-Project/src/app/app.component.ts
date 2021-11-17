import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Page:string = "";
  pageHeader:string = 'Employee Details';
  imagePath:string= "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.searchenginejournal.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fthe-seo-guide-to-angular-760x400.png&imgrefurl=https%3A%2F%2Fwww.searchenginejournal.com%2Fangular-seo-guide%2F303849%2F&tbnid=BaP596S8BXRcnM&vet=12ahUKEwiD2KmkipP0AhWPmksFHX8SCrUQMygBegUIARDSAQ..i&docid=xjXVZyi1ljKs1M&w=760&h=400&q=angular%20image&ved=2ahUKEwiD2KmkipP0AhWPmksFHX8SCrUQMygBegUIARDSAQ";
  status:String = "Deprecate";
  currentItem:String = "INPUT Decorators";
  items1:any = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items1.push(newItem);
    console.log(this.items1);
  }
  
}

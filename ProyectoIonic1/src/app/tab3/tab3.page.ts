import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  victimas: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/json/victimas.json').subscribe(data => {
      this.victimas = data;
      console.log(this.victimas)
    });
}

}
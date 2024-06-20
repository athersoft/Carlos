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

  getStateColor(estado:string)
  {
    console.log("Function called");
    console.log(estado);
    if (estado.toLowerCase() == "seguro") return "success";
    else if (estado.toLowerCase() == "en peligro") return "warning";
    else if (estado.toLowerCase() == "grave") return "danger";
    else return "secondary";
  }

  changeState(estado:string)
  {
    if (estado.toLowerCase() == "seguro") console.log("Cambiando a peligro");
    else if (estado.toLowerCase() == "en peligro") console.log("Cambiando a grave");
    else if (estado.toLowerCase() == "grave") console.log("Cambiando a seguro");
  }
}
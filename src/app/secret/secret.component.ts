import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  secrets:any = [];
  constructor() {   }

  ngOnInit() {
    this.getSecrets();
  }

  getSecrets() {
    this.secrets = [];
    this.getSecret().subscribe((data: {}) => {
      console.log(data);
      this.secrets = data;
    });
  }
    getSecret(): Observable<any> {
      return this.http.get('http://localhost:5000/api/secret').pipe(
        this.extractData);
    }

}

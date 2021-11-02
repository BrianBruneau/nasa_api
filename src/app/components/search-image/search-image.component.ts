import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})


export class SearchImageComponent implements OnInit {
  constructor(
    private http: HttpClient
    ) {

   }

  ngOnInit(): void {
  }

  submitForm(data: any) {
    console.log(data);

    this.http.post('http://localhost:4000/api/rover-search', data).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    )
  }

}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcomplaints',
  templateUrl: './addcomplaints.component.html',
  styleUrls: ['./addcomplaints.component.css']
})
export class AddcomplaintsComponent {
complaints=""
constructor(private api:ApiService){}
readValue=()=>{
  let data:any={
    "userid": localStorage.getItem("userinfo"),
    "complaint": this.complaints
  }
  this.api.addcomplaints(data).subscribe(
    (response:any)=>{
      console.log(response)
    }
  )
}
}

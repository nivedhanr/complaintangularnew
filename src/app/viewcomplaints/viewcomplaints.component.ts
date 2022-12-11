import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcomplaints',
  templateUrl: './viewcomplaints.component.html',
  styleUrls: ['./viewcomplaints.component.css']
})
export class ViewcomplaintsComponent {
  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userinfo")
    let data:any={"id":this.userId}
    this.api.viewcomplaints(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response

      }
    )
  }
  data:any=[]
}

import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { FeatureService } from 'src/app/Services/feature.service';
import { MakeService } from 'src/app/Services/make.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.sass']
})
export class VehicleFormComponent implements OnInit {
  makes:any[];
  models:any[];
  selectedMake:any={};
  features;
  vehicle:any={
    features:[],
    contact:{}
  }
  constructor(private makeService:MakeService, private featureService:FeatureService,private toast:ToastyService) {
    
   }

  ngOnInit(): void {
    this.makeService.getMakes().subscribe(c=>this.makes=c
    ,error=>console.log(error));

    this.featureService.getFeatures().subscribe(c=>this.features=c
      ,error=>console.log(error));
  }
  change(){
    
    let make = this.makes.find(c=>c.id==this.vehicle.make);
   this.models = make ? make.models : [];
   delete this.vehicle.model;
   

  }
  checked(id,event){
    if(event.target.checked){
      this.vehicle.features.push(id);
    }
    else{
      let index = this.vehicle.features.indexOf(id);
      this.vehicle.features.splice(index,1)
    }
  }
  submit(){
    this.toast.error({
      theme:"bootstrap",
      timeout:5000,
      showClose:true,
      title:"error",
      msg:"An unexpected error has occurred"
    })
  }
}

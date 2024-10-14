import { Component } from "@angular/core";
import { User } from "../models/user";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.scss"],
})
export class TemplateDrivenFormComponent {
  countryData: any[] = ['India', 'US', 'UK'];

  model: User = {
    address: '',
    city: '',
    state:'',
    postcode: null,
    country: null,
    aggrement: false
  };

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log("Full Address", this.model);  
  }
}


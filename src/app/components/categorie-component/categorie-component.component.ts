import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categorie-component',
  templateUrl: './categorie-component.component.html',
  styleUrls: ['./categorie-component.component.css']
})
export class CategorieComponentComponent implements OnInit {
  
  var_images;
  libelle_categorie_selectionne;
  choix_images = [];
  
  options = [
    {name: "Fais un choix", value: ""},
    {name: "Oui", value: "oui"},
    {name: "Non", value: "non"},
    {name: "Je voudrais", value: "voudrais"}
  ]

  constructor(private api: ApiService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.libelle_categorie_selectionne=this.route.snapshot.paramMap.get('cat');
    this.initImages(this.libelle_categorie_selectionne);
  }

  initImages(image){
    this.api.getAllImages().subscribe(
      data => {
        this.var_images = data;
        for(let img of this.var_images){
          if(img.categorie_image == image){
            img['choix'] = null;
            this.choix_images.push(img);
          }
        }
        console.log(this.choix_images);
      },
      error => {
        console.log(error);
      }
    )
  }

  setChoix(i, value){
    this.choix_images[i-1]['choix'] = value;
    console.log(this.choix_images);
  }

  onSubmit() {

    // console.log("Données du formulaire : ", this.saveInfoForm.value);
  }

}

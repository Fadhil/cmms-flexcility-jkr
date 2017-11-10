import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-team-new',
  templateUrl: './admin-team-new.component.html',
  styleUrls: ['./admin-team-new.component.scss']
  
})
export class AdminTeamNewComponent implements OnInit {

	dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

  ngOnInit() { 
        this.dropdownList = [
                              {"id":1,"itemName":"Azmarul Asfan"},
                              {"id":2,"itemName":"Zamil Idris"},
                              {"id":3,"itemName":"Zaidi Anwari"},
                              {"id":4,"itemName":"Anuar Adam"},
                              {"id":5,"itemName":"Clinton Joe"},
                              {"id":6,"itemName":"Syech Raie"},
                              {"id":7,"itemName":"Rafaie Rafael"},
                              {"id":8,"itemName":"Indra Shah"},
                              {"id":9,"itemName":"Akbar"},
                              {"id":10,"itemName":"Jauhari Dekati"}
                            ];
        // this.selectedItems = [
        //                         {"id":2,"itemName":"Zamil Idris"},
        //                         {"id":3,"itemName":"Zaidi Anwari"},
        //                         {"id":4,"itemName":"Anuar Adam"},
        //                         {"id":5,"itemName":"Clinton Joe"}
        //                     ];
        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Team Member",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true
                                };  
                                   }
    onItemSelect(item){
        console.log('Selected Item:');
        console.log(item);
    }
    OnItemDeSelect(item){
        console.log('De-Selected Item:');
        console.log(item);
    }
}

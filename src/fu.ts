import {Component, Input} from 'angular2/core';

@Component({
  selector: 'fu',
  templateUrl: 'fileupload.html'
})
export class FU {

  constructor(){

  }
  fileChange(){

  	var file = document.querySelector('.upload').files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
		  console.log(file);
      document.querySelector(".preview").src = file.type.match('image') ? reader.result : '';
    };
    reader.readAsDataURL(file);
  }
}
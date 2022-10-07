import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadService } from '../shared/file-upload.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pages:any
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    //this.getAllPage();
  }

  getAllPage(){
    this.fileUploadService.getPage().subscribe((data:any)=>{
      console.log(data);
      this.pages=data;

    })
  }

}

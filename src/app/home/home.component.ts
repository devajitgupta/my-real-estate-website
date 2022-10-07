import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;

  Users: any = [];

  constructor(public fileUploadService: FileUploadService) {
    this.getUsers();
   }


  ngOnInit(): void {
  }
  getUsers() {
    this.fileUploadService.getUsers().subscribe((res) => {
      this.Users = res['users'];
    });
  }

}

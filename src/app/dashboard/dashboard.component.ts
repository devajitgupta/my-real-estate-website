import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl} from '@angular/forms';
import { FileUploadService } from '../shared/file-upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  preview: string;
  form:FormGroup;
  percentDone?: any = 0;
  //users: any[] = [];

  // page form

  pageForm:FormGroup;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public fileUploadService: FileUploadService
  ) {
    // Reactive Form
    this.form = this.fb.group({
      name: [''],
      avatar: [null],
    });

    // create a page form
    
    this.pageForm=this.fb.group(
      {
        page:['']
      }
    )
    
  }

  ngOnInit() {
  }

  // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file,
    });
    this.form.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  
  submitForm() {
    this.fileUploadService
      .addUser(this.form.value.name, this.form.value.avatar)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.percentDone = Math.round((event.loaded / event.total) * 100);
            console.log(`Uploaded! ${this.percentDone}%`);
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', event.body);
            this.percentDone = false;
            this.router.navigate(['home']);
        }
      });
  }

  // submit page form to database
  /*
  onPageSubmit(){
    
    this.fileUploadService.addPage(this.pageForm.value.page).subscribe();
    console.log("page created")

  }
  */

  onPageSubmit(){
    console.log(this.pageForm.value)
    this.fileUploadService.addPage(this.pageForm.value).subscribe((data:any)=>{
      console.log(data);
    })
  }

}

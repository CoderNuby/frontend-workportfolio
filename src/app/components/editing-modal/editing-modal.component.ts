import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-editing-modal',
  templateUrl: './editing-modal.component.html',
  styleUrls: ['./editing-modal.component.css']
})
export class EditingModalComponent implements OnInit {

  @Input() project: Project = Project.NewEmptyProject();
  @Output() closeModalEditing = new EventEmitter<boolean>();

  filesToUpload: File[] = [];

  constructor(
    private _projectService: ProjectService,
    private _uploadImageService: UploadImageService
  ){

  }

  ngOnInit(): void{

  }

  editProject(projectForm: NgForm){
    this._projectService.update(this.project).subscribe((res) => {
      if(res.ok){
        if(projectForm.value.image){
          this._uploadImageService.fileRequest(res.data._id, [], this.filesToUpload, "image").then((result) => {
          });
        }
        this.closeModal();
      }
    });
  }

  closeModal(){
    this.closeModalEditing.emit(false);
  }

  fileChange(event: any){
    this.filesToUpload = event.target.files;
  }
}

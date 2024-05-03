import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {

  project: Project = Project.NewProject()
  filesToUpload: File[] = [];

  constructor(
    private _projectService: ProjectService,
    private _uploadImageService: UploadImageService
  ){

  }

  createProject(projectForm: NgForm): void{
    if(projectForm.valid){
      this._projectService.create(this.project).subscribe((res) => {
        if(res.ok){
          this._uploadImageService.fileRequest(res.data._id, [], this.filesToUpload, "image").then((result) => {
            alert("Project created successfuly");
            this.project = Project.NewProject();
          });
        }
      });
    }
  }

  fileChange(event: any){
    this.filesToUpload = event.target.files;
  }
}

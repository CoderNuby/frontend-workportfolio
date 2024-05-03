import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  project: Project = Project.NewEmptyProject();

  editing: boolean = false;

  constructor(
    private _projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.getProject(params.id);
    });
  }

  getProject(id: string){
    this._projectService.get(id).subscribe((res) => {
      this.project = Project.NewProject(res.data);
    });
  }

  closeModal(event: boolean){
    this.editing = event;
    this.getProject(this.project._id);
  }

  Edit(){
    this.editing = true;
  }

  Delete(){
    this._projectService.delete(this.project._id).subscribe((res) => {
      if(res.ok){
        alert("Project: " + res.data);
        this.router.navigate(["/projects"]);
      }
    });
  }
}

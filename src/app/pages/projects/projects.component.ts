import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    private _projectService: ProjectService
  ){
  }

  ngOnInit(): void {
      this._projectService.getAll().subscribe((res) => {
        this.projects = Project.NewProjects(res.data);
      });
  }
}

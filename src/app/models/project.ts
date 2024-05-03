

export class Project{
    private readonly url: string = "http://localhost:5000/api/project"; 

    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public category: string,
        public year: number,
        public langs: string,
        public image: string
    ){
        
    }

    public static NewEmptyProject(){
        return new Project("", "", "", "", 0, "", "");
    }

    public static NewProject(project: Project){
        return new Project(project._id, project.name, project.description,
            project.category, project.year, project.langs, project.image
        );
    }

    public static NewProjects(projects: Project[]){
        let myProjects = new Array<Project>();
        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const newProject = new Project(project._id, project.name, project.description,
                project.category, project.year, project.langs, project.image
            );
            myProjects.push(newProject);
        }

        return myProjects;
    }

    public GetImageUrl(): string {
        return `${this.url}/get-image/${this.image}`;
    }
}
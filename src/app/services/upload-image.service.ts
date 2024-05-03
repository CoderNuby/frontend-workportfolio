import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  readonly url = "http://localhost:5000/api/project/upload-image"; 

  constructor() { }

  fileRequest(id: string, params: string[], files: File[], name: string){
    let newUrl = `${this.url}/${id}`;

    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();
    
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append(name, file, file.name);
      }
    
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(new Error('Failed to upload files'));
          }
        }
      };
    
      xhr.open("POST", newUrl, true);
      xhr.send(formData);
    });
    
  }
}

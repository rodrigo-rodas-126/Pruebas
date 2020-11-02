import { Component } from '@angular/core';
import { Curso } from './models/curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cursosArray: Curso[] = [
    {id:1, nombre: 'IPC1', creditos: 12},
    {id:2,nombre: 'IPC2', creditos: 1},
    {id:3,nombre: 'IPC3', creditos: 2},
    {id:4,nombre: 'IPC4', creditos: 3}
  ];

  cursosArray2: Curso[] = [
    
  ];


  selectedCurso: Curso = new Curso();

  openForEdit(curso: Curso){
    this.selectedCurso = curso;
  }

  addOrEdit(){

    if(this.selectedCurso.id == 0){
      this.selectedCurso.id = this.cursosArray.length + 1;
      this.cursosArray.push(this.selectedCurso);
    }
    this.selectedCurso = new Curso();
  }

  add(){
      
    this.cursosArray2.push(this.selectedCurso);
    this.selectedCurso = new Curso();

  }

  delete(){
    if(confirm('Estas seguro de elimiar el curso seleccionado')){
      this.cursosArray2 = this.cursosArray2.filter(x => x != this.selectedCurso);
      this.selectedCurso = new Curso();
    }
  }

}

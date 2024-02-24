import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();


  public character: Character = {
    name: 'ABC',
    power: 0
  }



   @Input()
   public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
   ];

   // onDelete = index value: number


   onDeleteCharacter(id?:string):void{
     // TODO: Emitir el ID del personaje
     if(!id) return;
     this.onDelete.emit(id);
   }

   getMyVariableValue(id:string):string{
      return id;
   }

}

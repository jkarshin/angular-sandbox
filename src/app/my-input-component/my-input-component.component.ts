import { Component } from '@angular/core';

@Component({
  selector: 'app-my-input-component',
  templateUrl: './my-input-component.component.html',
  styleUrls: ['./my-input-component.component.css'],
})
export class MyInputComponentComponent {
  textValue = 'It is not checked';

  onCheckboxChange(event: Event) {
    this.textValue = (event.target as HTMLInputElement).checked
      ? 'It is checked'
      : 'It is not checked';
  }

  handleButtonClick() {
    alert('Button was clicked');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',  // Atualize o caminho para o template
  styleUrls: ['./calc.component.scss']    // Atualize o caminho para o SCSS
})
export class CalcComponent {
  public display: string = '';
  private operand1: number | null = null;
  private operand2: number | null = null;
  private operator: string | null = null;

  public appendNumber(number: string) {
    this.display += number;
  }

  public setOperator(operator: string) {
    if (this.display !== '') {
      this.operand1 = parseFloat(this.display);
      this.operator = operator;
      this.display = '';
    }
  }

  public calculate() {
    if (this.operand1 !== null && this.operator !== null && this.display !== '') {
      this.operand2 = parseFloat(this.display);
      switch (this.operator) {
        case '+':
          this.display = (this.operand1 + this.operand2).toString();
          break;
        case '-':
          this.display = (this.operand1 - this.operand2).toString();
          break;
        case '*':
          this.display = (this.operand1 * this.operand2).toString();
          break;
        case '/':
          if (this.operand2 !== 0) {
            this.display = (this.operand1 / this.operand2).toString();
          } else {
            this.display = 'Error';
          }
          break;
      }
      this.operand1 = null;
      this.operand2 = null;
      this.operator = null;
    }
  }

  public clear() {
    this.display = '';
    this.operand1 = null;
    this.operand2 = null;
    this.operator = null;
  }
}

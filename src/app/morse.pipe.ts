import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  private morseResult = '';
  private morseReturn: string;

  transform(input: string) {
    console.log(input)
    input = input.toUpperCase();
    console.log(input)
    for (let counter = 0; counter < input.length; counter++){
      switch(input.charAt(counter)){
        case "A":{
          this.morseResult += ". -";
          break;
        }
        case "B":{
          this.morseResult += "- . . .";
          break;
        }
        case "C":{
          this.morseResult += "- . - .";
          break;
        }
        case "D":{
          this.morseResult += "- . .";
          break;
        }
        case "E":{
          this.morseResult += ".";
          break;
        }
        case "F":{
          this.morseResult += ". . - .";
          break;
        }
        case "G":{
          this.morseResult += "- - .";
          break;
        }
        case "H":{
          this.morseResult += ". . . .";
          break;
        }
        case "I":{
          this.morseResult += ". .";
          break;
        }
        case "J":{
          this.morseResult += ". - - -";
          break;
        }
        case "K":{
          this.morseResult += "- . -";
          break;
        }
        case "L":{
          this.morseResult += ". - . .";
          break;
        }
        case "N":{
          this.morseResult += "- .";
          break;
        }
        case "M":{
          this.morseResult += "- -";
          break;
        }
        case "O":{
          this.morseResult += "- - -";
          break;
        }
        case "P":{
          this.morseResult += ". - - .";
          break;
        }
        case "Q":{
          this.morseResult += "- - . -";
          break;
        }
        case "R":{
          this.morseResult += ". - .";
          break;
        }
        case "S":{
          this.morseResult += ". . .";
          break;
        }
        case "T":{
          this.morseResult += "-";
          break;
        }
        case "U":{
          this.morseResult += ". . -";
          break;
        }
        case "V":{
          this.morseResult += ". . . -";
          break;
        }
        case "W":{
          this.morseResult += ". - -";
          break;
        }
        case "X":{
          this.morseResult += "- . . -";
          break;
        }
        case "Y":{
          this.morseResult += "- . - -";
          break;
        }
        case "Z":{
          this.morseResult += "- - . .";
          break;
        }
        case "Æ":{
          this.morseResult += ". - . -";
          break;
        }
        case "Ø":{
          this.morseResult += "- - - .";
          break;
        }
        case "Å":{
          this.morseResult += ". - - . -";
          break;
        }
        case "1":{
          this.morseResult += ". - - - -";
          break;
        }
        case "2":{
          this.morseResult += ". . - - -";
          break;
        }
        case "3":{
          this.morseResult += ". . . - -";
          break;
        }
        case "4":{
          this.morseResult += ". . . . -";
          break;
        }
        case "5":{
          this.morseResult += ". . . . .";
          break;
        }
        case "6":{
          this.morseResult += "- . . . .";
          break;
        }
        case "7":{
          this.morseResult += "- - . . .";
          break;
        }
        case "8":{
          this.morseResult += "- - - . .";
          break;
        }
        case "9":{
          this.morseResult += "- - - - .";
          break;
        }
        case "0":{
          this.morseResult += "- - - - -";
          break;
        }
        case ".":{
          this.morseResult += ". - . - . -";
          break;
        }
        case ",":{
          this.morseResult += "- - . . - -";
          break;
        }
        case ":":{
          this.morseResult += "- - - . . .";
          break;
        }
        case "?":{
          this.morseResult += ". . - - . .";
          break;
        }
        case "\'":{
          this.morseResult += ". - - - - .";
          break;
        }
        case "-":{
          this.morseResult += "- . . . . -";
          break;
        }
        case "/":{
          this.morseResult += "- . . - .";
          break;
        }
        case "(":{
          this.morseResult += "- . - - .";
          break;
        }
        case ")":{
          this.morseResult += "- . - - . -";
          break;
        }
        case "\"":{
          this.morseResult += ". - . . - .";
          break;
        }
        case "\r\n":{
          this.morseResult += ". - . -";
          break;
        }
        case "*":{
          this.morseResult += "- . . -";
          break;
        }
        case "@":{
          this.morseResult += ". - - . - .";
          break;
        }
        case " ":{
          this.morseResult += "";
          break;
        }
        default:{
          this.morseResult += "fuck";
          break;
        }
      }
      this.morseResult += " | ";
    }
    this.morseReturn = this.morseResult
    this.morseResult = "";
    return this.morseReturn;
  }

}
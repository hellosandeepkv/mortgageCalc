import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFromNumber',
  pure: true
})
export class ArrayFromNumberPipe implements PipeTransform
{

  transform(value: any, incrementer: number, appender: string): any
  {
    const array = [];
    let temp = `${  incrementer} ${appender}`;
    array.push({value:incrementer, label:temp});
    for (let i = 2; i <= value; i++)
    {
      let value = i * incrementer;
      array.push({ value: value, label: `${value} ${appender}s` });
    }
    return array;
  }

}

@NgModule(
  {
    declarations: [ArrayFromNumberPipe],
    exports: [ArrayFromNumberPipe],
    providers: [
      ArrayFromNumberPipe,
    ]
  }
)

export class ArrayFromNumberModule { }

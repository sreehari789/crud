import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users:any [], searchKey:string,name:string): any[] {
    const result:any=[]
if(!users || searchKey=='' || name==''){
  return users
}
users.forEach((user)=>{
  if(user[name].trim().toLowerCase().includes(searchKey.toLowerCase())){
    result.push(user)
  }
})

    return result;
  }

}

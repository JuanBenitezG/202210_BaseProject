import { Banda } from "./banda";

export class BandaDetail extends Banda{
  constructor(id:number,
    name:string,
    numberOfMembers:number,
    description:string,
    popularSongs:string[],
    image:string){


    super(id,name,numberOfMembers,description,popularSongs,image)
  }
}

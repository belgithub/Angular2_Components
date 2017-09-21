export class User {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public email: string,
      public sendProducts: boolean,
      public country: string,
      public city: string,
      public addressType?: string,
      public street1?: string,
      public street2?: string,
      public street3?: string,
      public zip?: string   
    ) { }
  }
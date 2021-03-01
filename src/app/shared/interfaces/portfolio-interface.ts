export interface IGetPortfolio {
  lenguageid: string;
  provider: string;
  agent: string;
  account: string;
  sender: ISender;
  target: ITarget;
}

export interface ISender {
  compid: string;
  subid: string;
  locationid: string;
  password: string;
}

export interface ITarget {
  compid: string;
  subid: string;
  locationid: string;
}

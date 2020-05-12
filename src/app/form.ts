export enum FormStatusEnum {
  DRAFT = 'Draft',
  PUBLISHED = 'Published'
}

export interface Form {
  id: number;
  name: string;
  description: string;
  status: FormStatusEnum;
  date: Date;
}
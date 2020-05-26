export enum FormStatusEnum {
  'Draft',
  'Published'
}

export interface Form {
  id: number;
  formName: string;
  formTitle: string;
  resultsUrl: string;
  created: string;
  published: boolean;
}


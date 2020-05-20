export enum FieldTypeEnum {
  'Number',
  'Text',
  'TextArea',
  'Checkbox',
  'Radio',
  'Autocomplete'
}

export interface Field {
    id: number;
    name: string;
    fieldType: number;
    isStrict: boolean;
    ownerId: number;
    created: string;
}

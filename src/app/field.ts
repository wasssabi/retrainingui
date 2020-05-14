export enum FieldTypeEnum {
  NUMBER = 'Number',
  TEXT = 'Text',
  TEXTAREA = 'TextArea',
  CHECKBOX = 'Checkbox',
  RADIO = 'Radio',
  AUTOCOMPLETE = 'Autocomplete'
}

export interface Field {
    id: number;
    name: string;
    type: FieldTypeEnum;
    created: Date;
}

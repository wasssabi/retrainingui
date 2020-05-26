export enum FieldTypeEnum {
  'Number',
  'Text',
  'TextArea',
  'Checkbox',
  'Radio',
  'Autocomplete'
}

export let DefaultFilters = {
  Number: true,
  Text: true,
  TextArea: true,
  Checkbox: true,
  Radio: true,
  Autocomplete: true,
};

export interface Field {
    id: number;
    name: string;
    fieldType: number;
    isStrict: boolean;
    ownerId: number;
    created: string;
}

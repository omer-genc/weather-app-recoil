export interface IData {
  key: string;
  value: string;
  mainData?: any;
}

export interface IProps {
  defaultValue: { key: string; value: string; mainData: any };
  error?: string;
  label?: string;
  data: IData[];
  onSelect: (data: any) => void;
}
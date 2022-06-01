export interface Record {
  type: "image" | "sheet";
  name: string;
  total?: number;
  data?: string;
  error?: string;
}

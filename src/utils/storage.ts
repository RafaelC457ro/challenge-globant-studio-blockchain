import { Record } from "../types";

const RECORDS_KEY = "records";

export const getRecords = () => {
  const records = localStorage.getItem(RECORDS_KEY);
  return records ? JSON.parse(records) : [];
};

export function addRecord(record: Record) {
  const records = getRecords();
  records.push(record);
  localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
}

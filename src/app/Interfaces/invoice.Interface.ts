export interface invoiceResponse {
  Invoice: [
    {
      id: number;
      schoolName: string;
      amountDue: number;
      dueDate: string;
    }
  ];
}

export interface Invoice {
  id: number;
  schoolName: string;
  amountDue: number;
  dueDate: string;
}

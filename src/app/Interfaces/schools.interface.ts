export interface schoolResponse {
    "Schools": [
        {
            SchoolName: string;
            Collections: number;
            Type: string;
            County: string;
            Product: string;
            registrationDate: string;
            ContactInfo: string;
            balance: string;
            id: string;   
        }
    ]
}

export interface School {
  SchoolName: string;
  Collections: number;
  Type: string;
  County: string;
  Product: string;
  registrationDate: string;
  ContactInfo: string;
  balance: string;
  id: string;
}

export interface CountriesResponse {
  '': [
    {
      flags: {
        png: string;
        svg: string;
        alt: string;
      };
      name: {
        common: string;
        official: string;
        nativeName: {
          ron: {
            official: string;
            common: string;
          };
        };
      };
      languages: {
        ron: string
      }
    }
  ];
}

export interface CovidData {
  id: string;
  rank: number;
  Country: string;
  Continent: string;
  TwoLetterSymbol: string | null;
  ThreeLetterSymbol: string | null;
  Infection_Risk: number;
  Case_Fatality_Rate: number;
  Test_Percentage: number;
  Recovery_Proporation: number;
  TotalCases: number;
  NewCases: number;
  TotalDeaths: number;
  NewDeaths: number;
  TotalRecovered: string;
  NewRecovered: number;
  ActiveCases: number;
  TotalTests: string;
  Population: string;
  Deaths_1M_pop: number;
  Serious_Critical: number;
  Tests_1M_Pop: number;
  TotCases_1M_Pop: number;
}

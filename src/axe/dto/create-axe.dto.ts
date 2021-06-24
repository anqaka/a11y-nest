import { AnyObject } from 'src/interfaces/any-object.interface';
export class CreateAxeDto {
  pages: string[] | [];
  fileName?: string;
  resultDir?: string;
  basicAuth?: { username: string; password: string } | null;
  axeConfig?: {
    reporter: string;
    branding?: {
      brand?: string;
      application?: string;
    };
    checks?: any[];
    rules?: any[];
    standards?: AnyObject;
    locale?: AnyObject;
    axeVersion?: string;
    disableOtherRules?: boolean;
    noHtml?: boolean;
  };
  viewport?: {
    width: string;
    height: string;
  };
}

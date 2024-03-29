import { MetadataObj } from './../../types/metadata-obj.type';
export class CreateAxeDto {
  _id?: string;
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
    standards?: MetadataObj;
    locale?: MetadataObj;
    axeVersion?: string;
    disableOtherRules?: boolean;
    noHtml?: boolean;
  };
  viewport?: {
    width: string;
    height: string;
  };
}

import { SelectDto } from "../types";
export declare const mapToSelectDto: <T extends Record<string, unknown>>(dataArray: T[], labelPath: string, valuePath: string) => SelectDto[];

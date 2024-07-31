import { FilterBase } from "src/app/_models/filter-base";

export class UserFilter extends FilterBase {
    name?: string;
    lastName?: string;
    email?: string;
    login?: string;
    status?: boolean;
}

import { DATA_GROUP_CONTACT } from "src/__data__";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export function groupReducer(state = DATA_GROUP_CONTACT): GroupContactsDto[] {
  return state;
}

import { DATA_CONTACT } from "src/__data__";
import { ContactDto } from "src/types/dto/ContactDto";

export function contactsReducer(state = DATA_CONTACT): ContactDto[] {
  return state;
}

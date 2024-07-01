import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const dataService = {
  getContactsData(): ContactDto[] {
    return DATA_CONTACT;
  },

  getFavoritesData(): ContactDto["id"][] {
    return [
      DATA_CONTACT[0].id,
      DATA_CONTACT[1].id,
      DATA_CONTACT[2].id,
      DATA_CONTACT[3].id,
    ];
  },

  getGroupData(): GroupContactsDto[] {
    return DATA_GROUP_CONTACT;
  },
};

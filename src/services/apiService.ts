import { BASE_URL, endpoints } from "src/config/api";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const apiService = {
  async getContacts(): Promise<ContactDto[] | undefined> {
    const result = await fetch(`${BASE_URL}${endpoints.getContacts}`);
    if (result) return result.json();
  },

  async getGroups(): Promise<GroupContactsDto[] | undefined> {
    const result = await fetch(`${BASE_URL}${endpoints.getGroups}`);
    if (result) return result.json();
  },
};

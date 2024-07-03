import { makeAutoObservable } from "mobx";
import { apiService } from "src/services/apiService";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactStore = makeAutoObservable({
  contacts: undefined as ContactDto[] | undefined,

  *getContacts() {
    const result: ContactDto[] | undefined = yield apiService.getContacts();
    if (result) contactStore.contacts = result;
  },
});

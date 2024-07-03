import { makeAutoObservable } from "mobx";
import { apiService } from "src/services/apiService";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupStore = makeAutoObservable({
  groups: undefined as GroupContactsDto[] | undefined,

  *getGroups() {
    const result: GroupContactsDto[] | undefined = yield apiService.getGroups();
    if (result) groupStore.groups = result;
  },
});

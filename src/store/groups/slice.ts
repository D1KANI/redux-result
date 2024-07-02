import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, endpoints } from "src/config/api";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupsSlice = createApi({
  reducerPath: "groups",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getGroups: build.query<GroupContactsDto[], void>({
      query() {
        return {
          url: endpoints.getGroups,
        };
      },
    }),
  }),
});

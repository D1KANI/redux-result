import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, endpoints } from "src/config/api";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsSlice = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getContacts: build.query<ContactDto[], void>({
      query() {
        return {
          url: endpoints.getContacts,
        };
      },
    }),
  }),
});

import ApiService from "../../../services/api.service";

const api = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ name }) => ({
        url: `users/${name}`,
      }),
    }),
    getEventsByUser: builder.query({
      query: ({ name }) => ({
        url: `users/${name}/events`,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetEventsByUserQuery } = api;

export default api;

import {
  createApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { API_URL, TOKEN } from "config";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    headers.set("Authorization", "token " + TOKEN);
    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result: any = await baseQuery(args, api, extraOptions);
  if (result.error) {
    if (result.error && result.error.status === 401) {
      alert("No autorizado");
    } else {
      // alert("Error del servicio");
    }
  }
  return result;
};

const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

export default api;

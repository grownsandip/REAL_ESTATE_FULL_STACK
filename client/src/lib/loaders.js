import apiRequest from "./apiRequest.js";
export const SinglePageLoader = async ({ request, params }) => {
    const res = await apiRequest("/posts/" + params.id);
    return res.data;
}
import { asyncActionType } from "utils";

export const FETCH_ALL_CONTACTS = asyncActionType("fetch_all_contacts");
export const CREATE_CONTACT = asyncActionType("create_contact");
export const UPDATE_CONTACT = asyncActionType("update_contact");
export const DELETE_CONTACT = asyncActionType("delete_contact");
export const CLEAR_ERROR = "clear_error";

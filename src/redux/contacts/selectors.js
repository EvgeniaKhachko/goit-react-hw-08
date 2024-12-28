
import { createSelector } from "reselect";
import { selectNameFilter } from "../filters/slice";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        const lowerCaseFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(lowerCaseFilter)
        );
    }
);


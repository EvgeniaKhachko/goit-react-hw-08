// export const selectIsError = (state) => state.contacts.error;

// export const selectIsLoading = (state) => state.contacts.loading;

// export const selectContacts = (state) => state.contacts.items;



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

// const selectContacts = (state) => state.contacts.items;
// export const selectIsLoading = state => state.contacts.loading;
// export const selectIsError = state => state.contacts.error;
// // export const selectFilter = state => state.contacts.filter; 
// const selectFilters = (state) => state.filters;



// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilters],
//   (contacts, filter) => {

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
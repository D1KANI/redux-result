import React, { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { loadContactsDataAction } from "src/store/actions";

export const ContactListPage = memo(() => {
  const dispatch = useAppDispatch();
  const contactsState = useAppSelector((state) => state.contacts);
  const groupContactsState = useAppSelector((state) => state.group);
  const [contacts, setContacts] = useState<ContactDto[]>(contactsState.data);

  useEffect(() => {
    if (!contactsState.data.length) {
      dispatch(loadContactsDataAction());
    }
  }, [dispatch, contactsState.data]);

  useEffect(() => {
    setContacts(contactsState.data);
  }, [contactsState.data]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsState.data;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1,
      );
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState.data.find(
        ({ id }) => id === fv.groupId,
      );

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id),
        );
      }
    }

    setContacts(findContacts);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});

import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";
import { groupStore } from "src/store/groupStore";
import { contactStore } from "src/store/contactStore";
import { observer } from "mobx-react-lite";

export const ContactListPage = observer(() => {
  const contactsState = contactStore.contacts;
  const groupContactsState = groupStore.groups;
  const [contacts, setContacts] = useState<ContactDto[]>(contactsState ?? []);

  useEffect(() => {
    if (contactsState) {
      setContacts(contactsState);
    } else {
      contactStore.getContacts();
    }
  }, [contactsState]);

  useEffect(() => {
    if (!groupContactsState) {
      groupStore.getGroups();
    }
  }, [groupContactsState]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    if (!contactsState || !groupContactsState) {
      return;
    }

    let findContacts: ContactDto[] = contactsState;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({ name }) => name.toLowerCase().indexOf(fvName) > -1);
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) => groupContacts.contactIds.includes(id));
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

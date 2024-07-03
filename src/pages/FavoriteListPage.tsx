import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { contactStore } from "src/store/contactStore";
import { observer } from "mobx-react-lite";

const favoriteContactsState: string[] = [];

export const FavoriteListPage = observer(() => {
  const contactsState = contactStore.contacts;
  const [contacts, setContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    if (contactsState && favoriteContactsState.length) {
      setContacts(() => contactsState.filter(({ id }) => favoriteContactsState.includes(id)));
    } else {
      contactStore.getContacts();
    }
  }, [contactsState]);

  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});

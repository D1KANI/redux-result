import { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { useGetContactsQuery } from "src/store/contacts";

const favoriteContactsState: string[] = [];

export const FavoriteListPage = memo(() => {
  const { data: contactsState } = useGetContactsQuery();
  const [contacts, setContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    if (contactsState && favoriteContactsState.length) {
      setContacts(() => contactsState.filter(({ id }) => favoriteContactsState.includes(id)));
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

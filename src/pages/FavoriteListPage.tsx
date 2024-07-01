import React, { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppSelector } from "src/store/hooks";

export const FavoriteListPage = memo(() => {
  const favoriteContactsState = useAppSelector((state) => state.favorites);
  const contactsState = useAppSelector((state) => state.contacts);
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  useEffect(() => {
    setContacts(() =>
      contactsState.filter(({ id }) => favoriteContactsState.includes(id)),
    );
  }, [contactsState, favoriteContactsState]);
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

import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { contactStore } from "src/store/contactStore";
import { observer } from "mobx-react-lite";

export const ContactPage = observer(() => {
  const contactsState = contactStore.contacts;
  const { contactId } = useParams<{ contactId: string }>();
  const [contact, setContact] = useState<ContactDto>();

  useEffect(() => {
    if (contactsState) {
      setContact(() => contactsState.find(({ id }) => id === contactId));
    } else {
      contactStore.getContacts();
    }
  }, [contactId, contactsState]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>{contact ? <ContactCard contact={contact} /> : <Empty />}</Col>
    </Row>
  );
});

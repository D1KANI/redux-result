import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { loadContactsDataAction } from "src/store/actions";

export const ContactPage = () => {
  const dispatch = useAppDispatch();
  const contactsState = useAppSelector((state) => state.contacts);
  const { contactId } = useParams<{ contactId: string }>();
  const [contact, setContact] = useState<ContactDto>();

  useEffect(() => {
    if (!contactsState.data.length) {
      dispatch(loadContactsDataAction());
    }
  }, [contactsState.data, dispatch]);

  useEffect(() => {
    if (!contactsState.data.length) return;

    setContact(() => contactsState.data.find(({ id }) => id === contactId));
  }, [contactId, contactsState.data]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};

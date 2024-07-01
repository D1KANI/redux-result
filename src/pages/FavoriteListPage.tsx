import React, { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import {
  loadContactsDataAction,
  loadFavoritesDataAction,
} from "src/store/actions";

export const FavoriteListPage = memo(() => {
  const dispatch = useAppDispatch();
  const favoriteContactsState = useAppSelector((state) => state.favorites);
  const contactsState = useAppSelector((state) => state.contacts);
  const [contacts, setContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    if (!contactsState.data.length) {
      dispatch(loadContactsDataAction());
    }
  }, [contactsState.data, dispatch]);

  useEffect(() => {
    if (!favoriteContactsState.data.length) {
      dispatch(loadFavoritesDataAction());
    }
  }, [favoriteContactsState.data, dispatch]);

  useEffect(() => {
    if (!contactsState.data.length || !favoriteContactsState.data.length)
      return;

    setContacts(() =>
      contactsState.data.filter(({ id }) =>
        favoriteContactsState.data.includes(id),
      ),
    );
  }, [contactsState.data, favoriteContactsState.data]);

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

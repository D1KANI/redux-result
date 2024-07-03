import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { observer } from "mobx-react-lite";
import { groupStore } from "src/store/groupStore";
import { contactStore } from "src/store/contactStore";

export const GroupPage = observer(() => {
  const contactsState = contactStore.contacts;
  const groupContactsState = groupStore.groups;
  const { groupId } = useParams<{ groupId: string }>();
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();

  useEffect(() => {
    if (!contactsState) {
      contactStore.getContacts();
    }
  }, [contactsState]);

  useEffect(() => {
    if (!groupContactsState) {
      groupStore.getGroups();
    }
  }, [groupContactsState]);

  useEffect(() => {
    if (groupContactsState && contactsState) {
      const findGroup = groupContactsState.find(({ id }) => id === groupId);
      setGroupContacts(findGroup);
      setContacts(() => {
        if (findGroup) {
          return contactsState.filter(({ id }) => findGroup.contactIds.includes(id));
        }
        return [];
      });
    }
  }, [groupId, contactsState, groupContactsState]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
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
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});

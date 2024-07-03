import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { groupStore } from "src/store/groupStore";

export const GroupListPage = observer(() => {
  const groupContactsState = groupStore.groups;

  useEffect(() => {
    if (!groupContactsState) {
      groupStore.getGroups();
    }
  }, [groupContactsState]);

  return (
    <Row xxl={4}>
      {groupContactsState &&
        groupContactsState.map((groupContacts) => (
          <Col key={groupContacts.id}>
            <GroupContactsCard groupContacts={groupContacts} withLink />
          </Col>
        ))}
    </Row>
  );
});

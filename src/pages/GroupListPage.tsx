import React, { memo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { loadGroupDataAction } from "src/store/actions";
import { useAppDispatch, useAppSelector } from "src/store/hooks";

export const GroupListPage = memo(() => {
  const dispatch = useAppDispatch();
  const groupContactsState = useAppSelector((state) => state.group);

  useEffect(() => {
    if (!groupContactsState.data.length) {
      dispatch(loadGroupDataAction());
    }
  }, [groupContactsState.data, dispatch]);

  return (
    <Row xxl={4}>
      {groupContactsState.data.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});

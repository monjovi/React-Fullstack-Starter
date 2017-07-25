import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Modal, Header, Icon, Input } from 'semantic-ui-react';

import * as actions from '../../actions/crud';

const Edit = ({ crud, actions }) => {
  const { id, primary, accent } = crud.editData;

  const onModalClose = () => actions.onEditModal(false);

  const onEdit = () => {
    if (primary && accent) {
      actions.onEditItem(id, primary, accent);
      onModalClose();
    }
  };

  return (
    <Modal open={ crud.editModalOpen } onClose={ onModalClose } basic size="small">
      <Header icon="edit" content="Edit" />
      <Modal.Content>
        <div>
          <Input value={ primary } onChange={ event => actions.onSetEdit(id, event.target.value, accent) } />
          { ' - ' }
          <Input value={ accent } onChange={ event => actions.onSetEdit(id, primary, event.target.value) } />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" onClick={ onModalClose } inverted>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={ onEdit } inverted>
          <Icon name="checkmark" /> Save
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Edit);
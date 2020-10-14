import React from 'react';
import { Modal, Button } from 'antd';
import FormEditCard from './FormEditCard';
class ModelEditCard extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { record } = this.props;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Edit Card
        </Button>
        <Modal
          title="Description Card"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <FormEditCard record={record} />
        </Modal>
      </>
    );
  }
}

export default ModelEditCard;

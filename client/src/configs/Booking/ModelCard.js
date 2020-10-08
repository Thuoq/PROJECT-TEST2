import React from 'react';
import { Modal, Button } from 'antd';

import { DescriptionTableCard } from '../../components';
class ModelCard extends React.Component {
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
    const { productDetail } = this.props;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Look Card
        </Button>
        <Modal
          title="Description Card"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <DescriptionTableCard productDetail={productDetail} />
        </Modal>
      </>
    );
  }
}

export default ModelCard;

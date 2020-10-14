import React from 'react';
import { Modal, Button } from 'antd';
import FormEditProduct from './FormEditProduct';
// import { DescriptionTableCard } from '../../components';
class ModelEditProduct extends React.Component {
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
          Look Detail Product
        </Button>
        <Modal
          title="Description Card"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <FormEditProduct record={record} />
        </Modal>
      </>
    );
  }
}

export default ModelEditProduct;

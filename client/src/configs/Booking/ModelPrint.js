import React from 'react';
import { Button, Modal } from 'antd';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './ComponentToPrint';
class ModelPrint extends React.Component {
  state = {
    visible: false,
  };

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
    const { userInfo } = this.props;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Make Print
        </Button>
        <Modal
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <div>
            <ComponentToPrint
              userInfo={userInfo}
              ref={(el) => (this.componentRef = el)}
            />
            <ReactToPrint
              trigger={() => {
                // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                // to the root node of the returned component as it will be overwritten.
                return <Button>Print this out!</Button>;
              }}
              content={() => this.componentRef}
            />
          </div>
        </Modal>
      </>
    );
  }
}

export default ModelPrint;

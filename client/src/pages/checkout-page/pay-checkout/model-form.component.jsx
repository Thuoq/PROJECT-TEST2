import React , {useState} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {updateAddressStart} from '../../../redux/user/user.action';
import {  Modal , Button , Form ,Input} from 'antd';

const ModelForm = ({updateAddressStart}) => {
    const [visible, setVisible] = useState(false);
    const onFinish = (values) => {
        updateAddressStart(values);
        setVisible(!visible)
    };
    return (
        <>
            <Button onClick={() => setVisible(!visible)}>Add New Address</Button>
            <Modal title="Add Your New Address" onCancel={() => setVisible(!visible)} visible={visible} footer={null}>
                <Form onFinish = {onFinish} >
                <Form.Item name="address">
                    <Input style={{ width: "75%" }} placeholder="Type Your Detail Address ..." />
                </Form.Item>
                <br /> 
                
                <Button type="primary" htmlType="submit">
                    {" "} 
                    Add New Address{" "}
                </Button>
                </Form>
            </Modal>
        </>
)}

const mapDispatchToProps = dispatch => ({
    updateAddressStart: address => dispatch(updateAddressStart(address))
})
ModelForm.propTypes = {
    updateAddressStart: PropTypes.func
}
export default connect(null,mapDispatchToProps)(ModelForm)
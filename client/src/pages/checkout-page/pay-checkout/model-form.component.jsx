import React , {useState} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {updateAddressStart} from '../../../redux/user/user.action';
import {  Modal , Button , Form ,Input,Spin} from 'antd';
import { createStructuredSelector } from 'reselect';
import { selectIsUpdatingUser } from '../../../redux/user/user.selector';

const ModelForm = ({updateAddressStart,IsUpdatingUser}) => {
    const [visible, setVisible] = useState(false);
    const onFinish = (values) => {
        updateAddressStart(values);
        setVisible(!visible)
    };
  
    return (
        <>
            <Button onClick={() => setVisible(!visible)}>Add New Address</Button>
            <Spin spinning = {IsUpdatingUser} size ="large">
                <Modal  title="Add Your New Address" onCancel={() => setVisible(!visible)} visible={visible} footer={null}>
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
            </Spin>
        </>
)}

const mapDispatchToProps = dispatch => ({
    updateAddressStart: address => dispatch(updateAddressStart(address)),
})

const mapStateToProps = createStructuredSelector({
    IsUpdatingUser : selectIsUpdatingUser
})
ModelForm.propTypes = {
    updateAddressStart: PropTypes.func
}
export default connect(mapStateToProps,mapDispatchToProps)(ModelForm)
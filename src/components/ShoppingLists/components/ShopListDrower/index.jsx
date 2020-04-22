import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, Form, Input, Button, Select,
} from 'antd';

import styles from './shopListDrower.scss';

const ShopListDrower = ({ drowerCtrl }) => {
  const [form] = Form.useForm();

  const submitForm = useCallback((values) => {
    drowerCtrl.createShopList(values);
    form.resetFields();
    drowerCtrl.close();
  },
  [drowerCtrl, form]);

  return (
    <Drawer
      title="New shopping list"
      placement="right"
      closable
      onClose={drowerCtrl.close}
      visible={drowerCtrl.visible}
    >
      <Form form={form} layout="vertical" size="middle" onFinish={submitForm}>

        <Form.Item name="name" label="Name" hasFeedback rules={[{ required: true, message: 'Name is required' }]}>
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item name="description" label="Description" hasFeedback rules={[{ type: 'string', max: 120, message: 'Maximum 120 characters' }]}>
          <Input.TextArea placeholder="Description" autoSize={{ minRows: 3, maxRows: 6 }} />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          hasFeedback
          rules={[{ required: true, message: 'Please select a category' }]}
        >
          <Select placeholder="Category">
            <Select.Option value="china">China</Select.Option>
            <Select.Option value="usa">U.S.A</Select.Option>
          </Select>
        </Form.Item>

        <div className={styles.buttons}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Button type="default" onClick={() => form.resetFields()}>
            Reset
          </Button>
        </div>

      </Form>
    </Drawer>
  );
};

ShopListDrower.propTypes = {
  drowerCtrl: PropTypes.shape({
    close: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    createShopList: PropTypes.func.isRequired,
  }).isRequired,
};

export default ShopListDrower;

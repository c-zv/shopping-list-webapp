import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, Form, Input, Button, Select,
} from 'antd';

import styles from './shopListDrawer.scss';

const categories = [
  {
    id: 1,
    name: 'Tech',
    color: '#8da0cb',
  },
  {
    id: 2,
    name: 'Food',
    color: '#fc8d62',
  },
  {
    id: 3,
    name: 'Regular',
    color: '#66c2a5',
  },
];

const ShopListDrawer = ({ drawerCtrl, submitShopList }) => {
  const [form] = Form.useForm();

  const submitForm = useCallback((values) => {
    const updatedShopList = { ...drawerCtrl.shopListToEdit, ...values };
    submitShopList(updatedShopList);
    form.resetFields();
    drawerCtrl.close();
  },
  [submitShopList, drawerCtrl, form]);

  useEffect(
    () => (
      drawerCtrl.shopListToEdit
        ? form.setFieldsValue(drawerCtrl.shopListToEdit)
        : form.resetFields()
    ),
    [form, drawerCtrl.shopListToEdit],
  );

  let titleText;
  let submitText;
  if (drawerCtrl.shopListToEdit) {
    titleText = 'Edit shopping list';
    submitText = 'Update';
  } else {
    titleText = 'New shopping list';
    submitText = 'Create';
  }

  return (
    <Drawer
      title={titleText}
      placement="right"
      closable
      getContainer={false}
      onClose={drawerCtrl.close}
      visible={drawerCtrl.visible}
    >
      <Form form={form} layout="vertical" size="middle" onFinish={submitForm}>

        <Form.Item name="name" label="Name" hasFeedback rules={[{ required: true, message: 'Name is required' }]}>
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item name="description" label="Description" hasFeedback rules={[{ type: 'string', max: 120, message: 'Maximum 120 characters' }]}>
          <Input.TextArea placeholder="Description" autoSize={{ minRows: 3, maxRows: 6 }} />
        </Form.Item>

        <Form.Item
          name="category_id"
          label="Category"
          hasFeedback
          rules={[{ required: true, message: 'Please select a category' }]}
        >
          <Select placeholder="Category" data-testid="selectedOption">
            {categories.map((cat) => (
              <Select.Option key={cat.id} value={cat.id}>{cat.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <div className={styles.buttons}>
          <Button type="primary" htmlType="submit" data-testid="submitButton">
            {submitText}
          </Button>
          <Button type="default" onClick={() => form.resetFields()} data-testid="resetButton">
            Reset
          </Button>
        </div>

      </Form>
    </Drawer>
  );
};

ShopListDrawer.propTypes = {
  drawerCtrl: PropTypes.shape({
    close: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    shopListToEdit: PropTypes.shape({}),
  }).isRequired,
  submitShopList: PropTypes.func.isRequired,
};

export default ShopListDrawer;

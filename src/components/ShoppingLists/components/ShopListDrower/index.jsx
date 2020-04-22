import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, Form, Input, Button, Select,
} from 'antd';

import styles from './shopListDrower.scss';

const categories = [
  {
    name: 'Tech',
    color: '#8da0cb',
  },
  {
    name: 'Food',
    color: '#fc8d62',
  },
  {
    name: 'Regular',
    color: '#66c2a5',
  },
];

const ShopListDrower = ({ drowerCtrl, submitShopList }) => {
  const [form] = Form.useForm();

  const submitForm = useCallback((values) => {
    const updatedShopList = { ...drowerCtrl.shopListToEdit, ...values };
    submitShopList(updatedShopList);
    form.resetFields();
    drowerCtrl.close();
  },
  [submitShopList, drowerCtrl, form]);

  useEffect(
    () => (
      drowerCtrl.shopListToEdit
        ? form.setFieldsValue(drowerCtrl.shopListToEdit)
        : form.resetFields()
    ),
    [form, drowerCtrl.shopListToEdit],
  );

  let titleText;
  let submitText;
  if (drowerCtrl.shopListToEdit) {
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
          name="color"
          label="Category"
          hasFeedback
          rules={[{ required: true, message: 'Please select a category' }]}
        >
          <Select placeholder="Category">
            {categories.map((cat) => (
              <Select.Option value={cat.color}>{cat.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <div className={styles.buttons}>
          <Button type="primary" htmlType="submit">
            {submitText}
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
    shopListToEdit: PropTypes.shape({}),
  }).isRequired,
  submitShopList: PropTypes.func.isRequired,
};

export default ShopListDrower;

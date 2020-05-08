import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { Form } from 'antd';

import { selectorsShopListCategories } from 'state/shoppingListCategories';

const useShopListDrawerHook = (drawerCtrl, submitShopList) => {
  const [form] = Form.useForm();

  const categoriesAll = useSelector(selectorsShopListCategories.categoriesAll);
  const categories = categoriesAll ? categoriesAll.data : [];

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

  return {
    form, submitForm, categories, titleText, submitText,
  };
};

export default useShopListDrawerHook;

import type { FormInstance } from "element-plus";

export const validateForm = (formEl: FormInstance, callback: Function) => {
  if (!formEl) return;

  formEl.validate((valid, fields) => {
    if (valid) {
      callback();
    } else {
      console.log("error submit!", fields);
    }
  });
};

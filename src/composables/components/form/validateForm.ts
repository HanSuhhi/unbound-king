import type { FormInst } from "naive-ui";

export async function validateForm(formEl: FormInst, callback: Function) {
  if (!formEl) return;

  await formEl.validate((errors) => {
    if (!errors) callback();
    else console.error("error submit!", errors);
  });
}

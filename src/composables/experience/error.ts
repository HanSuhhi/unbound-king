import { useNotification } from "naive-ui";
import { useI18n } from "vue-i18n";

export function findError(errMessage: string): string {
  const notification = useNotification();
  const { t } = useI18n();
  const meta = t(errMessage);
  notification.error({
    content: "❌ Exception",
    meta,
    duration: 2500,
    keepAliveOnHover: true
  });
  throw new Error(meta);
}

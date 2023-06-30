import { defer } from "lodash";
import { i18n } from "@/locals";
import { useDiscreteFeedback } from "@/composables/components/DiscreteFeedback";

export function findError(errMessage: string): string {
  const meta = i18n.global.t(errMessage);
  const { loadingBar, notification } = useDiscreteFeedback(["loadingBar", "notification"]);

  defer(() => {
    loadingBar.error();
    notification.error({
      content: "Exception",
      meta,
      duration: 2500,
      keepAliveOnHover: true
    });
    throw new Error(meta);
  });
}

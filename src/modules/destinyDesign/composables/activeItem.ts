import type { Ref } from "vue";
import { computed, inject, watch } from "vue";
import { useForm } from "./form";

export function useDestiny(props: { index: number }) {
  const changed = inject<Ref<boolean>>("changed")!;

  const destinies = inject<Ref<Destiny[]>>("data");
  const destiny = computed({
    get: () => destinies?.value[props.index],
    set: (_destiny) => {
      destinies!.value[props.index] = _destiny!;
    }
  });
  watch(destiny, () => changed.value = true, { deep: true });

  const form = useForm(destiny.value!);

  return { destiny, form };
}

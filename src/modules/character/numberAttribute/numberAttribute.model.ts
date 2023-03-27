import { ref } from "vue";

type BuffValue = [value: number, desc: string]

export class NumberAttribute {
  constructor(private baseValue: number) { }

  private buffValue = ref<Record<string, BuffValue>>({});
  private percentValue = ref<Record<string, BuffValue>>({});
  private finalBuffValue = ref<Record<string, BuffValue>>({});

}
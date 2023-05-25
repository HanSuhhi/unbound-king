type DataPackage = {
  id: string;
  translator: Translator;
  from: From
}

type ChoosedPackages = Record<string, From[]>
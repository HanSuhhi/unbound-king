import type { LiteralTypeNode, TypeLiteralNode, TypeNode, UnionTypeNode } from "typescript";
import { createSourceFile, forEachChild, isPropertySignature, isTypeAliasDeclaration, isTypeLiteralNode, ScriptTarget, SyntaxKind } from "typescript";

function parseTypeAliasDeclaration(typeString: string): AutoformItem[] {
  const sourceFile = createSourceFile("_", typeString, ScriptTarget.Latest);
  const members: AutoformItem[] = [];
  forEachChild(sourceFile, (node) => {
    if (!isTypeAliasDeclaration(node)) return;
    const typeNode = node.type as TypeLiteralNode;
    if (!isTypeLiteralNode(typeNode)) return;

    forEachChild(typeNode, (memberNode) => {
      if (!isPropertySignature(memberNode)) return;
      const key = (memberNode.name as any).text;
      const [type, options] = getTypeString(memberNode.type!);
      const required = !memberNode.questionToken;

      members.push({ key, type, options, title: "", required });
    });
  });
  return members;
}

function getTypeString(node: TypeNode): [type: AutoformItem["type"], options?: AutoformItem["options"]] {
  switch (node.kind) {
    default:
    case SyntaxKind.StringKeyword:
      return ["input"];
    case SyntaxKind.UnionType:
      const unionType = node as UnionTypeNode;
      const range = unionType.types.map(getTypeString) as unknown as string[];
      return ["selecter", { range }];
    case SyntaxKind.LiteralType:
      const literalTypeNode = node as LiteralTypeNode;
      return (literalTypeNode.literal as any).text;
  }
}

export const transformTypeToForm = (typeString: string): AutoformItem[] => parseTypeAliasDeclaration(typeString);

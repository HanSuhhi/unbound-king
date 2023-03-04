import type { TypeNode, UnionTypeNode, LiteralTypeNode } from "typescript";
import { SyntaxKind, createSourceFile, ScriptTarget, forEachChild, isTypeAliasDeclaration, isTypeLiteralNode, isPropertySignature } from "typescript";

function parseTypeAliasDeclaration(typeString: string) {
  const sourceFile = createSourceFile("_", typeString, ScriptTarget.Latest);
  const members: { key: string; type: FormType }[] = [];
  forEachChild(sourceFile, (node) => {
    if (isTypeAliasDeclaration(node)) {
      const typeNode = node.type;
      if (!isTypeLiteralNode(typeNode)) return;
      forEachChild(typeNode, (memberNode) => {
        if (!isPropertySignature(memberNode)) return;
        const key = (memberNode.name as any).text;
        const type = getTypeString(memberNode.type!);
        members.push({ key, type });
      });
    }
  });
  return members;
}

function getTypeString(node: TypeNode): FormType {
  switch (node.kind) {
    default:
    case SyntaxKind.StringKeyword:
      const type = "input";
      return { type };
    case SyntaxKind.UnionType:
      const unionType = node as UnionTypeNode;
      const options = unionType.types.map(getTypeString);
      return { type: "select", options };
    case SyntaxKind.LiteralType:
      const literalTypeNode = node as LiteralTypeNode;
      return (literalTypeNode.literal as any).text;
  }
}

export const transformTypeToForm = (typeString: string) => parseTypeAliasDeclaration(typeString);

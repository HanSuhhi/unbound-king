import type { Identifier, LiteralTypeNode, TypeLiteralNode, TypeNode, TypeReferenceNode, UnionTypeNode } from "typescript";
import { createSourceFile, forEachChild, isPropertySignature, isTypeAliasDeclaration, isTypeLiteralNode, ScriptTarget, SyntaxKind } from "typescript";
import { transformToKebab } from "./text/kebab";

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
      const [type, options] = getTypeFromNode(memberNode.type!);
      const required = !memberNode.questionToken;

      members.push({ key, type, options, title: "", required });
    });
  });
  return members;
}

function getTypeFromNode(node: TypeNode): [type: AutoformItem["type"], options?: AutoformItem["options"]] {
  switch (node.kind) {
    default:
    case SyntaxKind.StringKeyword:
      return ["input"];
    case SyntaxKind.UnionType:
      const unionType = node as UnionTypeNode;
      const range = unionType.types.map((type) => {
        const name = getTypeFromNode(type) as unknown as string;
        return {
          name,
          title: name,
        };
      });
      return ["selecter", { range }];
    case SyntaxKind.LiteralType:
      const literalTypeNode = node as LiteralTypeNode;
      return (literalTypeNode.literal as any).text;
    case SyntaxKind.TypeReference:
      const referenceTypeNode = node as TypeReferenceNode;
      const typeName = (referenceTypeNode.typeName as Identifier).escapedText as string;
      return [transformToKebab(typeName) as AutoformItem["type"]];
  }
}

export const transformTypeToForm = (typeString: string): AutoformItem[] => parseTypeAliasDeclaration(typeString);

import { kebabCase } from "lodash-es";
import type { Identifier, LiteralTypeNode, TypeLiteralNode, TypeNode, TypeReferenceNode, UnionTypeNode } from "typescript";
import { ScriptTarget, SyntaxKind, createSourceFile, forEachChild, isPropertySignature, isTypeAliasDeclaration, isTypeLiteralNode } from "typescript";

function parseTypeAliasDeclaration(typeString: string): AutoformItem[] {
  const sourceFile = createSourceFile("_", typeString, ScriptTarget.Latest);
  const members: AutoformItem[] = [];
  forEachChild(sourceFile, (node) => {
    if (!isTypeAliasDeclaration(node)) return;
    const typeNode = node.type as TypeLiteralNode;
    if (!isTypeLiteralNode(typeNode)) return;

    forEachChild(typeNode, (memberNode) => {
      if (!isPropertySignature(memberNode)) return;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const key = (memberNode.name as any).text;
      const [type, options] = getTypeFromNode(memberNode.type!);
      const required = !memberNode.questionToken;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      members.push({ key, type, options, title: "", required });
    });
  });
  return members;
}

function getTypeFromNode(node: TypeNode): [type: AutoformItem["type"], options?: AutoformItem["options"]] {
  switch (node.kind) {
    case SyntaxKind.UnionType: {
      const unionType = node as UnionTypeNode;
      const range: Translator[] = unionType.types.map((type) => {
        const key = getTypeFromNode(type) as unknown as string;
        return [key, key];
      });
      return ["selecter", { range }];
    }
    case SyntaxKind.LiteralType:{
      const literalTypeNode = node as LiteralTypeNode;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      return (literalTypeNode.literal as any).text;
    }
    case SyntaxKind.TypeReference:{
      const referenceTypeNode = node as TypeReferenceNode;
      const typeName = (referenceTypeNode.typeName as Identifier).escapedText as string;
      return [kebabCase(typeName) as AutoformItem["type"]];
    }
    case SyntaxKind.BooleanKeyword: {
      return ["switch"];
    }
    case SyntaxKind.StringKeyword:
    default:
      return ["text"];
  }
}

export function transformTypeToForm(typeString: string): AutoformItem[] {
  return parseTypeAliasDeclaration(typeString);
}

import { FC, useMemo, useCallback } from "react";
import { Id, ELEMENTS_ENUM, useEditor } from "../../editor";
import { Stage } from "../stage";
import { Column } from "../column";
import { Row } from "../row";
import { Properties } from "./properties";

const elementsMap = new Map([
  [ELEMENTS_ENUM.COL, Column],
  [ELEMENTS_ENUM.ROW, Row],
]);

export const EditorStaticExample: FC = () => {
  const { blocks, addRow, selectBlock, addColumn, selectedBlockElement } = useEditor();
  console.log(blocks);
  const renderBlock = useCallback(
    (id: Id): JSX.Element | null => {
      const block = blocks.get(id);
      if (!block) return null;

      const Element = elementsMap.get(block.elementType);
      if (!Element) throw Error("element does not exist");

      return (
        <Element key={block.id} onSelect={() => selectBlock(block.id)} selected={block.selected}>
          {block.childrenIds.map(renderBlock)}
        </Element>
      );
    },
    [blocks, selectBlock]
  );

  const rootBlocks = useMemo(() => Array.from(blocks.values()).filter((block) => block.parentId === null), [blocks]);

  return (
    <div className="editor">
      <Stage onSelect={() => selectBlock(null)}>{rootBlocks.map(({ id }) => renderBlock(id))}</Stage>
      <Properties selectedBlockElement={selectedBlockElement} addColumn={addColumn} addRow={addRow} />
    </div>
  );
};

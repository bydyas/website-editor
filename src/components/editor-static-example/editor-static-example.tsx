import { FC, useMemo, useCallback } from "react";
import { Id, ELEMENTS_ENUM, useEditor } from "../../store";
import { Icons } from "../icons";
import { Stage } from "../stage";
import { Column } from "../column";
import { Row } from "../row";

const elementsMap = new Map([
  [ELEMENTS_ENUM.COL, Column],
  [ELEMENTS_ENUM.ROW, Row],
]);

export const EditorStaticExample: FC = () => {
  const { blocks, addRow, selectBlock, addColumn } = useEditor();

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

      <div className="properties">
        <div className="section">
          <div className="section-header">Page</div>
          <div className="actions">
            <button className="action" onClick={addRow}>
              Add row
            </button>
          </div>
        </div>

        <div className="section">
          <div className="section-header">Row</div>
          <div className="actions">
            <button className="action" onClick={addColumn}>
              Add column
            </button>
          </div>
        </div>

        <div className="section">
          <div className="section-header">Column</div>
          <div className="button-group-field">
            <label>Contents</label>
            <div className="button-group">
              <button className="selected">
                <Icons.Text />
              </button>
              <button>
                <Icons.Image />
              </button>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">Text</div>
          <div className="button-group-field">
            <label>Alignment</label>
            <div className="button-group">
              <button className="selected">
                <Icons.TextAlignLeft />
              </button>
              <button>
                <Icons.TextAlignCenter />
              </button>
              <button>
                <Icons.TextAlignRight />
              </button>
            </div>
          </div>
          <div className="textarea-field">
            <textarea rows={8} placeholder="Enter text"></textarea>
          </div>
        </div>

        <div className="section">
          <div className="section-header">Image</div>
          <div className="text-field">
            <label htmlFor="image-url">URL</label>
            <input id="image-url" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

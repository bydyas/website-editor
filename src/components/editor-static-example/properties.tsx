import { ELEMENTS_ENUM, State, TUseEditor } from "../../editor";
import { Icons } from "../icons";

export type PropertiesProps = Pick<TUseEditor, "addColumn" | "addRow"> & Pick<State, "selectedBlockElement">;

export const Properties = ({ selectedBlockElement, addRow, addColumn }: PropertiesProps) => {
  return (
    <div className="properties">
      <div className="section">
        <div className="section-header">Page</div>
        <div className="actions">
          <button className="action" onClick={addRow}>
            Add row
          </button>
        </div>
      </div>

      {selectedBlockElement === ELEMENTS_ENUM.ROW && (
        <div className="section">
          <div className="section-header">Row</div>
          <div className="actions">
            <button className="action" onClick={addColumn}>
              Add column
            </button>
          </div>
        </div>
      )}

      {selectedBlockElement === ELEMENTS_ENUM.COL && (
        <>
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
        </>
      )}
    </div>
  );
};

import React from "react";

export function TimelineItem({ item, itemContext, getItemProps, getResizeProps }) {
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();

  return (
    <div {...getItemProps(item.itemProps)}>
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ""}

      <div className="rct-item-content" style={{ maxHeight: `${itemContext.dimensions.height}` }}>
        {itemContext.title}
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : ""}
    </div>
  );
}

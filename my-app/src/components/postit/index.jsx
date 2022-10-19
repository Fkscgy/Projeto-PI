import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import useResizeObserver from "@react-hook/resize-observer";
import "./style.css";

function useSize(target) {
  const [size, setSize] = useState();
  React.useLayoutEffect(() => {
    target && setSize(target.current.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
}
const Postit = ({ id, pos, value, handleBlur, size }) => {
  const [position, setPosition] = useState(pos);
  const [valor, setValor] = useState(value);
  const target = useRef();
  const tamanho = useSize(target);

  return (
    <Draggable
      onStop={(e) => {
        handleBlur(id, valor, position, tamanho);
      }}
      onDrag={(e, data) => {
        setPosition({ x: data.x, y: data.y });
      }}
      defaultPosition={pos}
      handle="#Drag"
    >
      <div id="Postit">
        <div id="Drag"></div>
        <textarea
          ref={target}
          style={{
            width: size.width,
            height: size.height,
          }}
          className="Postit-body"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          onBlur={(e) => {
            handleBlur(id, valor, pos, tamanho);
          }}
        />
      </div>
    </Draggable>
  );
};

export default Postit;

import Item from "./item";
import { Container, Row, Col, Stack } from "react-bootstrap";
const Catolog = () => {
  return (
    <div style={{ justifyContent: "center" }}>
      <Stack direction="horizontal" gap={3} style={{ alignItems: "center" }}>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Stack>
    </div>
  );
};
export default Catolog;

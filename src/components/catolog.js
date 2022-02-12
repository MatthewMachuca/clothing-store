import Item from "./item";
import { Container, Row, Col, Stack } from "react-bootstrap";
import './catolog.css'
const Catolog = () => {
  return (
    <div style={{ justifyContent: "center" }}>
      <Stack direction="horizontal" gap={3} className="col-md-5 mx-auto">
        <Item bsPrefix="catolog"></Item>
        <Item></Item>
        <Item></Item>
      </Stack>
    </div>
  );
};
export default Catolog;

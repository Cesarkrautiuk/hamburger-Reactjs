import { Content, H3 } from "./styled";
import { Item } from "../../component/itemBoxCard";
type PropsTitle = {
  title: string;
};
export function CadBox({ title }: PropsTitle) {
  return (
    <Content>
      <H3>{title}</H3>
      <div>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </Content>
  );
}

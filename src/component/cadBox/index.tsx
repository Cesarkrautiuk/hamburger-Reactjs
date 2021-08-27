import { Content, H3 } from "./styled";
import { ReactNode } from "react";
type PropsTitle = {
  title: string;
  children: ReactNode;
};
export function CadBox({ title, children }: PropsTitle) {
  return (
    <Content>
      <H3>{title}</H3>
      <div>{children}</div>
    </Content>
  );
}

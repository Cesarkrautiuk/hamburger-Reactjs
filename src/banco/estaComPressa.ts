import buger3 from "../asset/buger3.png";
import buger4 from "../asset/buger4.png";
import buger5 from "../asset/buger5.png";
import buger6 from "../asset/buger6.png";
type ListaType = {
  id: string;
  title: string;
  drecription: string;
  price: string;
  img: string;
};
export const lista: ListaType[] = [
  {
    title: "Hambúrguer caseiro",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "36.18",
    img: `${buger3}`,
    id: "14545dsdsad45487fdsfds",
  },
  {
    title: "Hambúrguer Costela",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "25.60",
    img: `${buger4}`,
    id: "14545dsdsad45487fdsfdsfffffeee",
  },
  {
    title: "Calabresa",
    drecription:
      " Burger de costela de 120g , alface americana , tomate em rodelas , cebola roxa , delicioso molho da casa",
    price: "23,18",
    img: `${buger5}`,
    id: "14545dsdsad45487fdsfdsfffffeee",
  },
  {
    title: "Batata frita",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "15.60",
    img: `${buger6}`,
    id: "14545dsdsad45487fdsfdsfffffeee",
  },
];

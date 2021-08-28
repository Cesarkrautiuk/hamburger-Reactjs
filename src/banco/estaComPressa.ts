import burger3 from "../asset/burger3.png";
import burger4 from "../asset/burger4.png";
import burger5 from "../asset/burger5.png";
import burger6 from "../asset/burger6.png";
import burger7 from "../asset/burger7.png";
import burger8 from "../asset/burger8.png";
import burger9 from "../asset/burger9.png";
import burger10 from "../asset/burger6.png";
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
    img: `${burger3}`,
    id: "14545dsdsad45487fds45vfds2",
  },
  {
    title: "Hambúrguer Costela",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "25.60",
    img: `${burger4}`,
    id: "14545dsdsad45487fdsfdsrfffffee2e",
  },
  {
    title: "Calabresa",
    drecription:
      " Burger de costela de 120g , alface americana , tomate em rodelas , cebola roxa , delicioso molho da casa",
    price: "23,18",
    img: `${burger5}`,
    id: "14545dsdsad45487fdssfdsfffffee78e",
  },
  {
    title: "Batata frita",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "15.60",
    img: `${burger6}`,
    id: "14545dsdsad45487fdsfdssfffffe98ee",
  },
];

export const listaPromocao: ListaType[] = [
  {
    title: "Hambúrguer caseiro + batata",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "46.18",
    img: `${burger7}`,
    id: "14545dsdsad45487fdsfds",
  },
  {
    title: "Hambúrguer Costela",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "35.60",
    img: `${burger8}`,
    id: "14545dsdsad45487fdsefdsfffffeee",
  },
  {
    title: "Hambúrgue Calabresa",
    drecription:
      " Burger de costela de 120g , alface americana , tomate em rodelas , cebola roxa , delicioso molho da casa",
    price: "76,75",
    img: `${burger9}`,
    id: "14545dsdsad45487fdsmfdsfffffeee",
  },
  {
    title: "Hambúrgue da casa",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "45.60",
    img: `${burger10}`,
    id: "14545dsdsad45487fdsfdqsfffffeee",
  },
];

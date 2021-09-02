import burger3 from "../asset/burger3.png";
import burger4 from "../asset/burger4.png";
import burger5 from "../asset/burger5.png";
import burger6 from "../asset/burger6.png";
import burger7 from "../asset/burger7.png";
import burger8 from "../asset/burger8.png";
import burger9 from "../asset/burger9.png";
import burger10 from "../asset/burger6.png";
import drink1 from "../asset/drink1.png";
import drink2 from "../asset/drink2.png";
import drink3 from "../asset/drink3.png";
import drink4 from "../asset/drink4.png";
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
    id: "1",
  },
  {
    title: "Hambúrguer Costela",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "25.60",
    img: `${burger4}`,
    id: "2",
  },
  {
    title: "Calabresa",
    drecription:
      " Burger de costela de 120g , alface americana , tomate em rodelas , cebola roxa , delicioso molho da casa",
    price: "23.18",
    img: `${burger5}`,
    id: "3",
  },
  {
    title: "Batata frita",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "15.60",
    img: `${burger6}`,
    id: "4",
  },
  {
    title: "Hambúrguer caseiro + batata",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "46.18",
    img: `${burger7}`,
    id: "5",
  },
  {
    title: "Hambúrguer Costela",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "35.60",
    img: `${burger8}`,
    id: "6",
  },
  {
    title: "Hambúrgue Calabresa",
    drecription:
      " Burger de costela de 120g , alface americana , tomate em rodelas , cebola roxa , delicioso molho da casa",
    price: "76.75",
    img: `${burger9}`,
    id: "7",
  },
  {
    title: "Hambúrgue da casa",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "45.60",
    img: `${burger10}`,
    id: "8",
  },
];

export const listDrink: ListaType[] = [
  {
    title: "  Batida de vodka com maracujá ",
    drecription: "O drink de maracujá com vodka e leite condensado 120ml ",
    price: "15.30",
    img: `${drink1}`,
    id: "9",
  },
  {
    title: "Suco de Limão",
    drecription:
      " Água, suco concentrado de limão, aroma natural de limão 120ml",
    price: "7.60",
    img: `${drink2}`,
    id: "10",
  },
  {
    title: "Cocktail de laranja",
    drecription: " Raspas de laranja, leite condensado vodca 120ml ",
    price: "25.75",
    img: `${drink3}`,
    id: "11",
  },
  {
    title: "Limonada de frutos vermelhos ",
    drecription:
      " Sumo limões,Hortelã verde,  açúcar  água gaseificada com sabor a framboesa frescas    ",
    price: "45.60",
    img: `${drink4}`,
    id: "12",
  },
];

export const listaPromocao: ListaType[] = [
  {
    title: "Hambúrguer caseiro + batata",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "46.18",
    img: `${burger7}`,
    id: "13",
  },
  {
    title: "Hambúrguer Costela",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "35.60",
    img: `${burger8}`,
    id: "14",
  },
  {
    title: "Hambúrgue Calabresa",
    drecription:
      " Burger de costela de 120g , alface americana , tomate em rodelas , cebola roxa , delicioso molho da casa",
    price: " 76.75",
    img: `${burger9}`,
    id: "15",
  },
  {
    title: "Hambúrgue da casa",
    drecription:
      " Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante...",
    price: "4.60",
    img: `${burger10}`,
    id: "16",
  },
];

import { Card, Container, Grid, Image, Input, PokeImage, Search } from "dse";
const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png";

const data = [
  {
    id: "001",
    name: "Bulbasaur",
    variety: "grass",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: "002",
    name: "Ivysaur",
    variety: "grass",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: "003",
    name: "Venasaur",
    variety: "grass",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
];

const Home = () => {
  return (
    <>
      <Container justifyContent="center" alignItems="center">
        <Image src={logo} alt="Pokémon logo" width={150} fit="scale" />
      </Container>
      <Container justifyContent="around">
        <Grid>
          <Search placeholder="Busca un pokémon" />
        </Grid>
        <Grid>
          <Input placeholder="Tipo de pokémon" />
        </Grid>
      </Container>
      <Container justifyContent="center" alignItems="center">
        {data.map((d) => (
          <>
            <PokeImage src={d.img} />
          </>
        ))}
      </Container>
    </>
  );
};

export default Home;

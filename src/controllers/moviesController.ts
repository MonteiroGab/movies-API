import movieSearchRepository from "../repositories/moviesRepository";

const movieSearchController = async (request, response) => {
  try {
    const query = request.query;
    const name: string = query.name;
    const page: string = query.page;

    if (name.length === 0 || page.length === 0) {
      throw new Error("Os parâmetros precisam ser preenchidos");
    }
    const repositoryResponse = await movieSearchRepository(name, page);
    response.status(200).send(repositoryResponse);
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .send({ error: true, message: "Aconteceu um erro na execução" });
  }
};

export default movieSearchController;

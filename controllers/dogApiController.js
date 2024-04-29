exports.getPicturesByBreed = async (req, res) => {
  const { breed, numOfPictures } = req.body;

  const url = `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random/${numOfPictures}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Respuesta no válida de la DogAPI");
    }

    const data = await response.json();
    const images = data.message;
    res.json({ images });
  } catch (error) {
    console.error('Error al buscar imagenes: ', error)
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getAllBreeds = async (req, res) => {

  const url = 'https://dog.ceo/api/breeds/list/all';
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Respuesta no válida de la DogAPI");
    }
    const data = await response.json();
    const breeds = Object.keys(data.message);
    res.json({ breeds })
    // res.json({ breeds: data.message })
  } catch (error) {
    console.error('Error al obtener la lista de las razas: ', error)
    res.status(400).json({
      status: "fail",
      message: error.message,
    });

  }
}

(() => {

  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  function getActorBioById(actorId: string) {
    console.log({ actorId });
  }

  interface MovieInformation {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function setMovie({ title, description, rating, cast }: MovieInformation) {
    console.log({ title, description, rating, cast });
  }

  function setActor(fullName: string, birthdate: Date): boolean {

    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor', birthdate);
    return true;

  }

  // Continuacion - Leccion 18
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  }

}) ();


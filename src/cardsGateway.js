export default getCards = () =>
  fetch('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e').this(
    (res) => res.json()
  );

import CharacterItem from './CharacterItem';

function CharacterList({ characterList }) {
  const htmlLi = characterList.map((eachCharacter) => (
    <li className="character__list">
      <CharacterItem eachCharacter={eachCharacter} />
    </li>
  ));
  return <ul className="character__list">{htmlLi}</ul>;
}
export default CharacterList;

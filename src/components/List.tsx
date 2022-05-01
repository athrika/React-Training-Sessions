import Item from "./Item";
import "./List.css";

const List = ({ listOfItems }: any) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Author</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {listOfItems.map(({ ObjectID, ...rest }: any) => (
            <Item key={ObjectID} {...rest}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;

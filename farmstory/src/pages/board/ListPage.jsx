import List from "../../components/board/List";
import BoardLayout from "../../layouts/BoardLayout";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function ListPage() {
  return (
    <DefaultLayout>
      <BoardLayout>
        <List />
      </BoardLayout>
    </DefaultLayout>
  );
}

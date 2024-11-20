import View from "../../components/board/View";
import BoardLayout from "../../layouts/BoardLayout";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function ViewPage() {
  return (
    <DefaultLayout>
      <BoardLayout>
        <View />
      </BoardLayout>
    </DefaultLayout>
  );
}

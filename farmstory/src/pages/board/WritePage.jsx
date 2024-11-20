import Write from "../../components/board/Write";
import BoardLayout from "../../layouts/BoardLayout";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function WritePage() {
  return (
    <DefaultLayout>
      <BoardLayout>
        <Write />
      </BoardLayout>
    </DefaultLayout>
  );
}

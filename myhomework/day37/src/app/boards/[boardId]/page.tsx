"use client";

import { FetchBoardDocument } from "@/commons/graphql/graphql";
import CommentList from "@/components/boards-detail/comment-list";
import CommentWrite from "@/components/boards-detail/comment-write";
import BoardsDetail from "@/components/boards-detail/detail";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { comment } from "postcss";

export default function BoardsNewPage() {
  const params = useParams();
  console.log(params.boardId);
  const { data } = useQuery(FetchBoardDocument, {
    variables: { boardId: params.boardId as string },
  });

  console.log("BoardsNewPage의 데이터: ", data);

  return (
    <>
      <BoardsDetail isEdit={false} data={data} />
      <CommentWrite />
      <CommentList />
    </>
  );
}

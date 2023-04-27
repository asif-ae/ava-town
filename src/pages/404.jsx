import React from "react";
import Error from "next/error";
import ErrorTemplate from "@/components/templates/Error";

export default function Page404() {
  return (
    <ErrorTemplate>
      <main>
        <Error statusCode={404} />
      </main>
    </ErrorTemplate>
  );
}

import React from "react";
import { LoginView } from "~/views";

function Page() {
  return <LoginView />;
}

Page.getLayout = (page: React.ReactNode) => (
  <React.Fragment>{page}</React.Fragment>
);

export default Page;

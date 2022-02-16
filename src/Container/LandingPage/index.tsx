import { FC } from "react";
import Header from "../../Components/Header";
import SearchInput from "../../Components/SearchInput";

const LandingPage: FC = () => {
  return (
    <>
      <Header title="Test Task" />
      <SearchInput />
    </>
  );
};

export default LandingPage;

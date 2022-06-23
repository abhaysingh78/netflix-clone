import React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Nav from "../../components/Navbar/Nav";
import "./home.scss";
import { discover, action, comedy, docu, horro } from "../../api/api";

const home = () => {
  return (
    <div className='home'>
      <Nav />
      <Featured type='movie' />
      <List title='Continue to watch' api={discover} />
      <List title='Action' api={action} />
      <List title='Comedy' api={comedy} />
      <List title='Documentries' api={docu} />
      <List title='Horror' api={horro} />
    </div>
  );
};

export default home;

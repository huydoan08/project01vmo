import React from "react";
import Section from '../../components/todosapp/Section'
import Footer from "./Footer";


const Todos = () => {
  return (
    <div className="text-center pt-10 pb-32 bg-white mx-96 ">
      <section className=" mt-36 relative">
        <Section/>
        <Footer/>
      </section>
    </div>
  );
};

export default Todos;

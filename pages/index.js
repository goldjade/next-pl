/** @format */

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevAni from "../components/DevAni";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              프론트엔드 개발자&nbsp;
              <br className="hidden lg:inline-block" />
              최금옥
            </h1>
            <p className="mb-8 leading-relaxed">
              지속적인 학습을 통해 새로운 지식과 기술을 습득하고,
              <br />
              꾸준한 발전으로 가치있는 서비스를 제공하는 목표를 갖고있는 <br />
              배움을 좋아하고 문제를 끝까지 해결하는 끈기와 인내를 갖고있는
              개발자. <br />
              미션 컴플리터 최금옥입니다. <br /> <br />
              해당 사이트는 공부용으로 제작된 사이트며, 
              <br />
              next.js 와 notion DB를 사용하여 제작되었습니다.
            </p>
            <div className="flex justify-center">
              <Link legacyBehavior href="/portfolio">
                <button className="btn-project-index ">Portofolio</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <DevAni />
          </div>
        </div>
      </section>
    </>
  );
}

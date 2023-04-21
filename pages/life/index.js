import React from "react";
import { TOKEN, DATABASE_ID_LIFE } from "../../config/index";
const Life = ({ lifeData }) => {
  console.log(lifeData);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              LIFE
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              일상을 담고 있습니다.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={lifeData.results[0].cover.external.url}
                />
                <span className="absolute inline-block p-1 top-[5%] font-bold text-white bg-black bg-opacity-50">
                  {lifeData.results[0].properties.Name.title[0].plain_text}
                </span>
              </div>
              <div className="md:p-2 p-1 w-1/2 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={lifeData.results[1].cover.external.url}
                />
                <span className="absolute inline-block p-1 top-[5%] font-bold text-white bg-black bg-opacity-50">
                  {lifeData.results[1].properties.Name.title[0].plain_text}
                </span>
              </div>
              <div className="md:p-2 p-1 w-full relative">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={lifeData.results[2].cover.external.url}
                />
                <span className="absolute inline-block p-1 top-2 font-bold text-white bg-black bg-opacity-50">
                  {lifeData.results[2].properties.Name.title[0].plain_text}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full relative">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={lifeData.results[3].cover.external.url}
                />
                <span className="absolute inline-block p-1 top-2 font-bold text-white bg-black bg-opacity-50">
                  {lifeData.results[3].properties.Name.title[0].plain_text}
                </span>
              </div>
              <div className="md:p-2 p-1 w-1/2 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={lifeData.results[4].cover.external.url}
                />
                <span className="absolute inline-block p-1 top-2 font-bold text-white bg-black bg-opacity-50">
                  {lifeData.results[4].properties.Name.title[0].plain_text}
                </span>
              </div>
              <div className="md:p-2 p-1 w-1/2 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={lifeData.results[5].cover.external.url}
                />
                <span className="absolute inline-block p-1 top-2 font-bold text-white bg-black bg-opacity-50">
                  {lifeData.results[5].properties.Name.title[0].plain_text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Life;

// SSG
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name", //이름으로 오름차순 내림차순으로
          direction: "ascending", //역순으로 정렬
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID_LIFE}/query`,
    options
  );

  const lifeData = await res.json();
  console.log(lifeData.results);

  const aa = lifeData.results.map((item) => item.id);
  console.log(aa);

  return {
    props: { lifeData },
    revalidate: 10, //갱신주기(초)
  };
}

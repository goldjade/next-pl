/** @format */

import React from "react";
import Image from "next/legacy/image";
const ProjectItem = ({ data }) => {
  console.log("==============");
  console.log(data);
  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgUrl = data.cover.external?.url || data.cover.external.url;
  const gitUrl = data.properties.Github.url;
  const ytUrl = data.properties.Youtube.url;
  const Site = data.properties.Site.url;
  const tags = data.properties.Tags.multi_select; // 배열임
  const end = data.properties.Workperiod.date.end;
  const start = data.properties.Workperiod.date.start;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    // console.log(`startDate: ${startDate}`);
    // console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    // console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <div className="bg-gray-100 p-6 rounded-lg">
        <a href={Site} target="_blank">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={imgUrl}
            width="100%"
            height="100%"
            layout="responsive"
            alt="content"
          />
        </a>

        <h3 className="tracking-widest text-indigo-500 dark:text-slate-800 text-xs font-medium title-font">
          {/* 태그 */}
          <div>
            {tags.map((item) => (
              <span key={item.id}>{item.name}</span>
            ))}
          </div>
        </h3>
        <h2 className="text-lg text-gray-900 dark:text-slate-500 font-medium title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
        <div className="text-xs font-medium">
          <a href={gitUrl}>git</a>
          <a href=""></a>
          <a href=""></a>
        </div>
        {/* 작업기간 */}
        <div className="text-xs font-medium">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)})일
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

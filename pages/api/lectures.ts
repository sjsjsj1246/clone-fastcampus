import { NextApiRequest, NextApiResponse } from "next";

const mockCategory = {
  id: 0,
  name: "프로그래밍",
};

const mockTags = [
  {
    id: 0,
    name: "평생소장",
  },
  {
    id: 1,
    name: "AWS",
  },
  {
    id: 2,
    name: "DevOps",
  },
];

const lecturesData = {
  lectureList: [
    {
      id: 0,
      category: "programming",
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DebOps 운영",
      tags: mockTags,
      description: "Java/Spring 필수 25개 기술 스택 이 강의 하나로 끝!",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    },
    {
      id: 1,
      category: "design",
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DebOps 운영",
      tags: mockTags,
      description: "Java/Spring 필수 25개 기술 스택 이 강의 하나로 끝!",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    },
    {
      id: 2,
      category: mockCategory,
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DebOps 운영",
      tags: mockTags,
      description: "Java/Spring 필수 25개 기술 스택 이 강의 하나로 끝!",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(lecturesData);
}

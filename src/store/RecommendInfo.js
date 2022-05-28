import {atom} from "recoil";

const RecommendInfo = atom({
    key: "RecommendInfo",
    default: {behaviorList: [], foodList: [], keywordList: [], musicList: [], musicList2: []},
});

export {RecommendInfo};
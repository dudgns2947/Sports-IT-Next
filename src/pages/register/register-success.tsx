import SuccessPage from "@component/components/page/SuccessPage";
import React, { useEffect } from "react";
import Head from "next/head";
import { useRecoilState } from "recoil";
import {
  contestContentAtom,
  contestEventAtom,
  contestEventCountAtom,
  contestNameAtom,
  contestPosterList,
  contestRuleFileNames,
  contestRuleFiles,
  contestRuleUrlNames,
  contestRuleUrls,
  contestWeightSectors,
} from "@component/atoms/contestAtom";
const RegisterSuccess = () => {
  const [contestEvents, setContestEvents] = useRecoilState(contestEventAtom);
  const [count, setCount] = useRecoilState(contestEventCountAtom);
  const [contestName, setContestName] = useRecoilState(contestNameAtom);
  const [posterList, setPosterList] = useRecoilState(contestPosterList);
  const [contestContent, setContestContent] =
    useRecoilState(contestContentAtom);
  const [ruleFileNames, setRuleFileNames] =
    useRecoilState(contestRuleFileNames);
  const [ruleFiles, setRuleFiles] = useRecoilState(contestRuleFiles);
  const [ruleUrlNames, setRuleUrlNames] = useRecoilState(contestRuleUrlNames);
  const [ruleUrls, setRuleUrls] = useRecoilState(contestRuleUrls);
  const [weightSectors, setWeightSectors] =
    useRecoilState(contestWeightSectors);

  useEffect(() => {
    setContestEvents({
      팔씨름: false,
      배구: false,
      농구: false,
      축구: false,
      수영: false,
      배드민턴: false,
      태권도: false,
      체조: false,
      탁구: false,
      테니스: false,
      육상: false,
      검도: false,
      볼링: false,
      야구: false,
      족구: false,
      합기도: false,
      풋살: false,
      골프: false,
      요가: false,
      다이빙: false,
      수구: false,
      철봉: false,
      역도: false,
      택견: false,
      쿵푸: false,
      씨름: false,
      가라데: false,
      유도: false,
      복싱: false,
      킥복싱: false,
      레슬링: false,
      주짓수: false,
      펜싱: false,
      양궁: false,
      승마: false,
      피겨: false,
      쇼트트랙: false,
      아이스하키: false,
      사이클: false,
      스쿼시: false,
      핸드볼: false,
      미식축구: false,
      당구: false,
      럭비: false,
      마라톤: false,
    });
    setCount(0);
    setContestName("");
    setPosterList([]);
    setContestContent("");
    setRuleFileNames([]);
    setRuleFiles([]);
    setRuleUrlNames([]);
    setRuleUrls([]);
    setWeightSectors([]);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SuccessPage
        title="대회개최 완료"
        firstText="대회등록이"
        secondText="완료되었습니다."
        navText="내가 올린 대회보기"
        url="/contest"
      ></SuccessPage>
    </>
  );
};

export default RegisterSuccess;

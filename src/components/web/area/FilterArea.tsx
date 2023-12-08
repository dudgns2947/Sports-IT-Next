import { ISector, ISubSector } from "@component/interfaces/contestInterface";
import Image from "next/image";
import styled from "styled-components";
import CheckBox from "../box/CheckBox";
import { BoldText, GrayText } from "@component/components/text/boldText";
import SelectBox from "../box/SelectBox";

const FilterArea = ({
  title,
  describe,
  gender,
  category,
  sector,
  weight,
  sectorList,
  weightList,
  setGender,
  setCategory,
  setSector,
  setWeight,
}: {
  title: string;
  describe: string;
  gender?: number;
  category?: number;
  sector?: ISector;
  weight?: ISubSector;
  sectorList: ISector[];
  weightList: ISubSector[] | undefined;
  setGender: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCategory: React.Dispatch<React.SetStateAction<number | undefined>>;
  setSector: React.Dispatch<React.SetStateAction<ISector | undefined>>;
  setWeight: React.Dispatch<React.SetStateAction<ISubSector | undefined>>;
}) => {
  //   const [filteredData, setFilteredData] = useRecoilState(filtered_data);
  //   const [passValueCode, setPassValueCode] = useRecoilState(tablePassValueAtom);
  //   const router = useRouter();

  return (
    <FilterContainer>
      <BoldText>📌 {title}</BoldText>
      {/* <GrayText>{describe}</GrayText> */}
      <FilterBox>
        <FilterRow>
          <FilterName>
            성별
            <Image
              src="/images/icon/star.png"
              width={6}
              height={7}
              alt="essential"
              style={{
                position: "absolute",
                top: "1px",
                right: "-6px",
              }}
            />
          </FilterName>
          <RemainArea>
            <CheckBox
              value={0}
              content="남성"
              id={Math.random()}
              bold={gender === 0}
              setGender={setGender}
            />
            <CheckBox
              value={1}
              content="여성"
              id={Math.random()}
              bold={gender === 1}
              setGender={setGender}
            />
          </RemainArea>
        </FilterRow>
        <FilterRow>
          <FilterName>
            분류
            <Image
              src="/images/icon/star.png"
              width={6}
              height={7}
              alt="essential"
              style={{
                position: "absolute",
                top: "1px",
                right: "-6px",
              }}
            />
          </FilterName>
          <RemainArea>
            <CheckBox
              value={0}
              content="오른팔"
              id={Math.random()}
              bold={category === 0}
              setCategory={setCategory}
            />

            <CheckBox
              value={1}
              content="왼팔"
              id={Math.random()}
              bold={category === 1}
              setCategory={setCategory}
            />
          </RemainArea>
        </FilterRow>
        <FilterRow>
          <FilterName>
            부문
            <Image
              src="/images/icon/star.png"
              width={6}
              height={7}
              alt="essential"
              style={{
                position: "absolute",
                top: "1px",
                right: "-6px",
              }}
            />
          </FilterName>
          <RemainArea>
            <SelectBox
              sectors={sectorList}
              sector={sector}
              setSector={setSector}
            />
          </RemainArea>
        </FilterRow>
        <FilterRow>
          <FilterName>
            체급
            <Image
              src="/images/icon/star.png"
              width={6}
              height={7}
              alt="essential"
              style={{
                position: "absolute",
                top: "1px",
                right: "-6px",
              }}
            />
          </FilterName>
          <RemainArea>
            <SelectBox
              weights={sector?.subSectors}
              weight={weight}
              setWeight={setWeight}
            />
          </RemainArea>
        </FilterRow>
        <ButtonArea>
          <ResetButton
            onClick={() => {
              /**여기에 조건문으로 POST요청이 잘 들어왔는지(필터링이 잘 되었는지) 확인 후, Atom을 true로 변경해주세요.*/
              setGender(undefined);
              setCategory(undefined);
              setSector(undefined);
              setWeight(undefined);
              //   setFilteredData(false);
              //   setPassValueCode("");
            }}
          >
            초기화
          </ResetButton>
          <ApplyButton
            onClick={() => {
              /**여기에 조건문으로 POST요청이 잘 들어왔는지(필터링이 잘 되었는지) 확인 후, Atom을 true로 변경해주세요.*/
              //   if (router.route.includes("setting")) {
              //     // 대회 설정
              //     if (
              //       // 필터링 데이터를 모두 선택한 경우
              //       gender !== undefined &&
              //       category !== undefined &&
              //       sector &&
              //       weight
              //     ) {
              //       searchCompetitors(
              //         gender,
              //         category,
              //         sector,
              //         weight,
              //         "",
              //         router.query.id,
              //         setCompetitorList
              //       );
              //       setPassValueCode(
              //         String(gender) +
              //           String(category) +
              //           String(sector?.sectorCode) +
              //           String(weight?.subSectorCode)
              //       );
              //       console.log("이동할 페이지 코드 번호 :" + passValueCode);
              //       setFilteredData(true);
              //     } else {
              //       // 필터링 데이터 중 일부가 선택되지 않은 경우
              //       Swal.fire({
              //         text: "성별, 분류, 부문, 체급을 모두 선택해주세요.",
              //         showConfirmButton: true,
              //       });
              //     }
              //   } else {
              //     // 그외 (참가자 관리)
              //     searchCompetitors(
              //       gender,
              //       category,
              //       sector,
              //       weight,
              //       "",
              //       router.query.id,
              //       setCompetitorList
              //     );
              //     setPassValueCode(
              //       String(gender) +
              //         String(category) +
              //         String(sector?.sectorCode) +
              //         String(weight?.subSectorCode)
              //     );
              //     console.log("이동할 페이지 코드 번호 :" + passValueCode);
              //     setFilteredData(true);
              //   }
            }}
          >
            적용
          </ApplyButton>
        </ButtonArea>
      </FilterBox>
    </FilterContainer>
  );
};

export default FilterArea;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f4f4f4;
  border-radius: 6px;
  margin-top: 20px;
  padding: 20px 25px;
  width: 24vw;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
`;

const FilterRow = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  height: 20px;
  justify-content: flex-start;
`;

const FilterName = styled.span`
  position: relative;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 20px;
  width: 14%;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9ebed;
  color: #aeaeae;
  border-radius: 7px;
  height: 35px;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0 15px;
  cursor: pointer;
`;

const ApplyButton = styled(ResetButton)`
  background-color: #fd3446;
  color: #ffffff;
  margin-left: 5px;
`;

const RemainArea = styled.div`
  width: 86%;
  display: flex;
`;

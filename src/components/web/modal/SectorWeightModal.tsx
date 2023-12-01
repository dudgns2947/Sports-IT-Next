import { contestWeightSectors } from "@component/atoms/contestAtom";
import SurveyCard from "@component/components/card/SurveyCard";
import React from "react";
import ReactModal from "react-modal";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const SectorWeightModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [weightSectors, setWeightSectors] =
    useRecoilState(contestWeightSectors);
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => {
        setModalOpen(false);
      }}
      style={customModalStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
    >
      <UploadForm>
        <TitleArea>
          <Title>부문 및 체급 등록</Title>
        </TitleArea>
        <SurveyCard
          setWeightSectors={setWeightSectors}
          setModalOpen={setModalOpen}
        />
      </UploadForm>
    </ReactModal>
  );
};

export default SectorWeightModal;

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "667px",
    height: "65%",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    alignItems: "center",
    // overflow: "auto",
  },
};

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #212121;
`;

const UploadForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

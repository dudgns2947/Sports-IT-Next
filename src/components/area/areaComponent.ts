import styled from "styled-components";

export const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 15%;
`;

export const ContentPaddingArea = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 0 15px; */
  /* padding-bottom: 5%; */
`;

export const ContentColumnArea = styled(ContentPaddingArea)`
  display: flex;
  flex-direction: column;
  padding-top: 12%;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexRowSpaceBetween = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexColumn)`
  justify-content: center;
`;

export const FlexColumnRowCenter = styled(FlexColumnCenter)`
  align-items: center;
`;

export const PaddingArea = styled.div`
  padding: 0 20%;
`;

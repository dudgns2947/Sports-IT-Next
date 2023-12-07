import { useState } from "react";
import * as S from "./CuponCard.styles"

const CuponCard = () => {
    const [hasCupon, setHasCupon] = useState(false);
    return(
        <>
        <S.CardWrapper>
            <S.CardTitle>
                쿠폰
            </S.CardTitle>
            <S.CuponContents>
               <S.CuponText>사용 가능한 쿠폰</S.CuponText>
               <S.CuponSelcetbox className={hasCupon ? '' : 'no-coupon'}>
               {!hasCupon && <option value="" hidden>보유한 쿠폰이 없습니다</option>}

                {/* 쿠폰 옵션들 */}
                <option value="coupon1">쿠폰 1</option>
                <option value="coupon2">쿠폰 2</option>
                <option value="coupon3">쿠폰 3</option>
               </S.CuponSelcetbox>
            </S.CuponContents>
        </S.CardWrapper>
        </>
    )
}

export default CuponCard;
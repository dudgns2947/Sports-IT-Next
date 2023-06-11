import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    naver: any;
  }
}

const MapWrapper = styled.div`
  width: 100%;
  height: 10vh;
  margin: 1em 0;
  opacity: 0.8 !important;
  color: black;
`;

const useNaverMapInitializer = (latitude: number, longitude: number, addressName: string) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [naverMap, setNaverMap] = useState<naver.maps.Map | null>(null);
  const [naverMapMarker, setNaverMapMarker] = useState<naver.maps.Marker | null>(null);

  useEffect(() => {
    const onNaverScriptLoad = () => {
      const naver = window.naver;
      const map: naver.maps.Map = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(127.0403496, 37.2815219),
        zoom: 15,
      });
      // map.setop
      setNaverMap(map);

      const marker: naver.maps.Marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, 37.2815219),
        map: map,
        icon: {
          content: [
            '<div class=""  style="opacity :1 !important ; position : relative ; top : 2em ; left : .5em ; height : 100% ; display :flex ; align-items : center ; gap : .3em"> ',
            '<img src="../images/icon/marker.png" width="20"></img>',
            `<div style="font-size : .8em">지도보기 ></div>`,
            "</div>",
          ].join(""),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
        draggable: false,
      });
      setNaverMapMarker(marker);
      naver.maps.Event.addListener(marker, "click", () => {
        console.log("도로명주소:", addressName);
        console.log("위도:", latitude);
        console.log("경도:", longitude);
        if (/Android/i.test(navigator.userAgent)) {
          window.location.href = `geo:${latitude},${longitude}`;
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = `nmap://map?lat=${latitude}&lng=${longitude}&zoom=20`;
        } else if (/windows/i.test(navigator.userAgent)) {
          window.open(`https://map.naver.com/v5/search/${encodeURI(addressName)}`, "_blank");
        } else if (/Mac/i.test(navigator.userAgent)) {
          window.open(`https://map.naver.com/v5/search/${encodeURI(addressName)}`, "_blank");
        } else {
          window.open(`https://map.naver.com/v5/search/${encodeURI(addressName)}`, "_blank");
        }
      });
    };

    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
    script.onload = onNaverScriptLoad;
    document.head.appendChild(script);
  }, [latitude, longitude, addressName]);
  return { mapRef };
};

export const Map: React.FC<{ latitude: number; longitude: number; addressName: string }> = ({ latitude, longitude, addressName }) => {
  const { mapRef } = useNaverMapInitializer(latitude, longitude, addressName);
  return <MapWrapper ref={mapRef} />;
};

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./Reservation.module.css";
import { useQuery, useMutation } from "@tanstack/react-query";
import { $_concert } from "util/axios";

export default function Reservation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isPointBtn, setIsPointBtn] = useState(false);
  const [isKakaoBtn, setIsKakaoBtn] = useState(false);

  const onClickBtn = (e) => {
    if (e === "point") {
      if (isKakaoBtn) setIsKakaoBtn(false);
      setIsPointBtn(!isPointBtn);
    } else {
      if (isPointBtn) setIsPointBtn(false);
      setIsKakaoBtn(!isKakaoBtn);
    }
  };

  // API_DELETE 함수
  const res_delete = () => {
    return $_concert.delete(
      `/seat/delete/${location.state.reservationId}`,
      location.state.reservationId
    );
  };

  // 페이지 벗어날 시 이벤트 발생
  const { mutate: onDelete } = useMutation(res_delete);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
    onDelete();
    setTimeout(() => {
      navigate("../../../");
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    console.log(location.state.reservationId);
    if (location.state.reservationId === undefined) navigate("../../../");
  }, []);

  return (
    <div>
      <div className={style.total}>
        <div className={style.left_div}>
          <div>
            <img
              className={style.poster_img}
              src={location.state.image}
              alt=""
            />
          </div>
          <div>
            <button
              className={style.btn}
              onClick={() => {
                navigate("/complete", {
                  state: {
                    title: location.state.title,
                    seat: location.state.seat,
                    endDate: location.state.endDate,
                    price: location.state.price,
                  },
                });
              }}
            >
              결제하기
            </button>
          </div>
        </div>
        <div className={style.right_div}>
          <div className={style.pay_type}>결제 수단</div>
          <div className={style.btn_type}>
            <div>
              <input
                className={style.radio_btn}
                type="radio"
                name="pay_type"
                id="point"
                value="point"
                onClick={(e) => {
                  onClickBtn(e.target.value);
                }}
              />
              <label className={style.radio_btn} htmlFor="point">
                포인트
              </label>
            </div>
            <div>
              <input
                className={style.radio_btn}
                type="radio"
                name="pay_type"
                id="kakao"
                value="kakao"
                onClick={(e) => {
                  onClickBtn(e.target.value);
                }}
              />
              <label className={style.radio_btn} htmlFor="kakao">
                카카오페이
              </label>
            </div>
          </div>
          <div className={style.contents}>
            <div className={style.name}>
              <div className={style.title}>공연명</div>
              <div className={style.content}>{location.state.title}</div>
            </div>
            <div className={style.seat}>
              <div className={style.title}>좌석 번호</div>
              <div className={style.content}>
                {location.state.seat[0]}-{location.state.seat.slice(1)}
              </div>
            </div>
            <div className={style.location}>
              <div className={style.title}>공연장</div>
              <div className={style.content}>{location.state.location}</div>
            </div>
            <div className={style.date}>
              <div className={style.title}>공연일</div>
              <div className={style.content}>
                {location.state.endDate.slice(0, 4)}년&nbsp;
                {location.state.endDate.slice(5, 7)}월&nbsp;
                {location.state.endDate.slice(8, 10)}일&nbsp;
                {location.state.endDate.slice(11, 13)}시&nbsp;
                {location.state.endDate.slice(14, 16)}분&nbsp;
              </div>
            </div>
          </div>
          <div className={style.pay}>
            <div className={style.title}>총 결제 금액</div>
            <div className={style.content}>{location.state.price}원</div>
          </div>
        </div>
      </div>
    </div>
  );
}
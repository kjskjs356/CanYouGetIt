import React, { useEffect } from "react";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import logo from "img/logo.png";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  userId,
  userAuth,
  userNick,
  userPoint,
  isModalOpen,
} from "../../util/store";
import { $ } from "util/axios";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  const navigate = useNavigate();
  const [id, setId] = useRecoilState(userId);
  const [auth, setAuth] = useRecoilState(userAuth);
  const [nickName, setNickName] = useRecoilState(userNick);
  const [point, setPoint] = useRecoilState(userPoint);
  const onModal = useRecoilValue(isModalOpen);

  const { isLoading, data: pointData } = useQuery(["getPoint"], () =>
    $.get(`/user-service/api/v1/user/point/${id}`)
  );

  // 로그아웃 함수(back 통신 X)
  const onLogout2 = () => {
    sessionStorage.clear();
    setId("");
    setAuth("");
    setNickName("");
    navigate("/");
  };

  useEffect(() => {
    if (!isLoading) setPoint(pointData.data);
  }, [isLoading]);

  return (
    <div className={onModal ? style.disbled : null}>
      {!isLoading && auth !== "ROLE_USER" && (
        <div
          className={onModal ? style.header_admin_disbled : style.header_admin}
        >
          <div>
            <div
              onClick={() => {
                navigate("../");
              }}
              className={style.header_left_admin}
            >
              <img className={style.logo} src={logo} alt="" />{" "}
              <p className={style.logo_name}>CAN YOU GET IT</p>
            </div>
          </div>
          <div className={style.header_right_admin}>
            <div
              className={style.admin}
              onClick={() => {
                navigate("admin/total");
              }}
            >
              관리자페이지
            </div>
            <div className={style.user_logout} onClick={() => onLogout2()}>
              로그아웃
            </div>
          </div>
        </div>
      )}
      {!isLoading && auth === "ROLE_USER" && (
        <div
          className={onModal ? style.header_user_disabled : style.header_user}
        >
          <div>
            <div
              onClick={() => {
                navigate("../home");
              }}
              className={style.header_left_user}
            >
              <img className={style.logo} src={logo} alt="" />{" "}
              <p className={style.logo_name}>CAN YOU GET IT</p>
            </div>
          </div>
          <div className={style.header_right_user}>
            <div className={style.user_name}>{nickName}님 환영합니다.</div>
            <div
              className={style.user_mypage}
              onClick={() => {
                navigate("../mypage");
              }}
            >
              마이페이지
            </div>
            <div className={style.user_point}>
              {point.toLocaleString("ko-KR", {
                currency: "KRW",
              })}
              P
            </div>
            <div className={style.user_logout} onClick={() => onLogout2()}>
              로그아웃
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

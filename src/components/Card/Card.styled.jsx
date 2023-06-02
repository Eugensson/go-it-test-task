import styled from '@emotion/styled';

export const CardLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const CardPictureThumb = styled.div`
  margin-bottom: 68px;
`;

export const CardRowLine = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const CardAvatar = styled.img`
  position: absolute;
  // border: 8px solid #ebd8ff;
  // box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
  //   inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  border-radius: 50%;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
`;

export const CardUserName = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #ebd8ff;
`;

export const CardTweetThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;

export const CardFollowThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 15px;
`;

export const CardText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const CardBtn = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 0;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
`;

export const CardBtnFollowing = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 0;
  background-color: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
`;

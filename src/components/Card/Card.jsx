import { useSelector, useDispatch } from 'react-redux';

import { followTweet, unFollowTweet } from 'redux/tweets/operations';
import { selectFollowers } from 'redux/tweets/selectors';

import {
  CardLogo,
  CardPictureThumb,
  CardRowLine,
  CardAvatar,
  CardUserName,
  CardTweetThumb,
  CardFollowThumb,
  CardText,
  CardBtn,
  CardBtnFollowing,
} from 'components/Card/Card.styled';

import logo from 'components/Card/logo.png';
import cardPicture from './cardPicture.png';
import avatarDefault from './avatarDefault.png';

const Card = ({ tweet }) => {
  const dispatch = useDispatch();
  const myFollowers = useSelector(selectFollowers);
  const isFollower = myFollowers.includes(Number(tweet.id));

  return (
    <>
      <CardLogo
        src={logo}
        width="76"
        height="22"
        aria-label="Іконка компанії GoIT"
      />
      <CardPictureThumb>
        <img
          src={cardPicture}
          alt="Зображення питання-відповідь"
          width="308"
          height="168"
        />
      </CardPictureThumb>
      <CardRowLine />
      <CardAvatar
        src={!tweet.avatar ? avatarDefault : tweet.avatar}
        width="80"
        height="80"
        alt="Аватар користувача"
      />
      <CardUserName>{tweet.user}</CardUserName>
      <CardTweetThumb>
        <CardText>{tweet.tweets}</CardText>
        <CardText>tweets</CardText>
      </CardTweetThumb>
      <CardFollowThumb>
        <CardText>{tweet.followers}</CardText>
        <CardText>Followers</CardText>
      </CardFollowThumb>

      {isFollower ? (
        <CardBtnFollowing
          onClick={() => {
            dispatch(unFollowTweet(tweet));
          }}
        >
          Following
        </CardBtnFollowing>
      ) : (
        <CardBtn
          onClick={() => {
            dispatch(followTweet(tweet));
          }}
        >
          Follow
        </CardBtn>
      )}
    </>
  );
};

export default Card;

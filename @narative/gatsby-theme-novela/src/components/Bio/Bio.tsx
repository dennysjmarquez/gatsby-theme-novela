import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import Image from "@components/Image";
import { IAuthor } from "@types";

function Bio({ author }: IAuthor) {
  return (
    <BioContainer>
      <BioAvatar as={author.authorsPage ? Link : "div"} to={author.slug}>
        <BioAvatarInner>
          <Image src={author.avatar.medium} />
        </BioAvatarInner>
      </BioAvatar>
      <BioText>{author.bio}</BioText>
    </BioContainer>
  );
}

export default Bio;

const BioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

const BioAvatar = styled.div`
  display: block;
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  &::after {
    content: "";
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

const BioAvatarInner = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const BioText = styled.p`
  max-width: 430px;
  font-size: 14px;
  line-height: 1.45;
  color: ${p => p.theme.colors.grey};
`;

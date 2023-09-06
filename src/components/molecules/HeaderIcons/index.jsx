import HeaderIconDiv from '@/components/atoms/HeaderIconDiv';
import { headerIconsData } from '@/mock/data';
import { styled } from 'styled-components';

const HeaderIcons = () => {
  return (
    <HeaderIconsItem>
      {headerIconsData.map((data) => (
        <HeaderIconDiv key={data.title} icon={data.icon} title={data.title} />
      ))}
    </HeaderIconsItem>
  );
};

const HeaderIconsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export default HeaderIcons;

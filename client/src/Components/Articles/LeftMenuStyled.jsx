import styled from "styled-components";

const styles = getComputedStyle(document.documentElement);
const unactiveFontColor = styles.getPropertyValue('--unactiveFontColor');
const activeFontColor = styles.getPropertyValue('--activeFontColor');
const standartDurationTime = styles.getPropertyValue('--standartDurationTime');
const lightBgColor = styles.getPropertyValue('--lightBgColor');
const bigFontSize = styles.getPropertyValue('--bigFontSize');
const lightLinkBg = styles.getPropertyValue('--lightLinkBg');

export const ContainerLeft = styled.div`
    background: ${lightBgColor};
    width: 20rem;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    top: 0;
    left: 0;
    transform: translate(-100%, 0);
    position: absolute;
    transition: transform ${standartDurationTime};
`;
export const OuterListContainer = styled.div`
    max-height: 15rem;
    overflow-y: auto;
`;
export const FilterBtn = styled.button`
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10rem;
    left: 0;
`;
export const CloseBtn = styled.button`
    float: right;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    position: relative;
`;
export const FilterSvg = () => (
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 10H37.66C37.2468 8.82895 36.4805 7.81489 35.4668 7.0976C34.4531 6.38031 33.2418 5.99512 32 5.99512C30.7582 5.99512 29.5469 6.38031 28.5332 7.0976C27.5195 7.81489 26.7532 8.82895 26.34 10H8C7.46957 10 6.96086 10.2107 6.58579 10.5858C6.21071 10.9609 6 11.4696 6 12C6 12.5305 6.21071 13.0392 6.58579 13.4142C6.96086 13.7893 7.46957 14 8 14H26.34C26.7532 15.1711 27.5195 16.1852 28.5332 16.9024C29.5469 17.6197 30.7582 18.0049 32 18.0049C33.2418 18.0049 34.4531 17.6197 35.4668 16.9024C36.4805 16.1852 37.2468 15.1711 37.66 14H40C40.5304 14 41.0391 13.7893 41.4142 13.4142C41.7893 13.0392 42 12.5305 42 12C42 11.4696 41.7893 10.9609 41.4142 10.5858C41.0391 10.2107 40.5304 10 40 10ZM32 14C32.5304 14 33.0391 13.7893 33.4142 13.4142C33.7893 13.0392 34 12.5305 34 12C34 11.4696 33.7893 10.9609 33.4142 10.5858C33.0391 10.2107 32.5304 10 32 10C31.4696 10 30.9609 10.2107 30.5858 10.5858C30.2107 10.9609 30 11.4696 30 12C30 12.5305 30.2107 13.0392 30.5858 13.4142C30.9609 13.7893 31.4696 14 32 14ZM6 24C6 23.4696 6.21071 22.9609 6.58579 22.5858C6.96086 22.2107 7.46957 22 8 22H10.34C10.7532 20.829 11.5195 19.8149 12.5332 19.0976C13.5469 18.3803 14.7582 17.9951 16 17.9951C17.2418 17.9951 18.4531 18.3803 19.4668 19.0976C20.4805 19.8149 21.2468 20.829 21.66 22H40C40.5304 22 41.0391 22.2107 41.4142 22.5858C41.7893 22.9609 42 23.4696 42 24C42 24.5305 41.7893 25.0392 41.4142 25.4142C41.0391 25.7893 40.5304 26 40 26H21.66C21.2468 27.1711 20.4805 28.1852 19.4668 28.9024C18.4531 29.6197 17.2418 30.0049 16 30.0049C14.7582 30.0049 13.5469 29.6197 12.5332 28.9024C11.5195 28.1852 10.7532 27.1711 10.34 26H8C7.46957 26 6.96086 25.7893 6.58579 25.4142C6.21071 25.0392 6 24.5305 6 24ZM16 26C16.5304 26 17.0391 25.7893 17.4142 25.4142C17.7893 25.0392 18 24.5305 18 24C18 23.4696 17.7893 22.9609 17.4142 22.5858C17.0391 22.2107 16.5304 22 16 22C15.4696 22 14.9609 22.2107 14.5858 22.5858C14.2107 22.9609 14 23.4696 14 24C14 24.5305 14.2107 25.0392 14.5858 25.4142C14.9609 25.7893 15.4696 26 16 26ZM8 34C7.46957 34 6.96086 34.2107 6.58579 34.5858C6.21071 34.9609 6 35.4696 6 36C6 36.5305 6.21071 37.0392 6.58579 37.4142C6.96086 37.7893 7.46957 38 8 38H26.34C26.7532 39.1711 27.5195 40.1852 28.5332 40.9024C29.5469 41.6197 30.7582 42.0049 32 42.0049C33.2418 42.0049 34.4531 41.6197 35.4668 40.9024C36.4805 40.1852 37.2468 39.1711 37.66 38H40C40.5304 38 41.0391 37.7893 41.4142 37.4142C41.7893 37.0392 42 36.5305 42 36C42 35.4696 41.7893 34.9609 41.4142 34.5858C41.0391 34.2107 40.5304 34 40 34H37.66C37.2468 32.829 36.4805 31.8149 35.4668 31.0976C34.4531 30.3803 33.2418 29.9951 32 29.9951C30.7582 29.9951 29.5469 30.3803 28.5332 31.0976C27.5195 31.8149 26.7532 32.829 26.34 34H8ZM34 36C34 36.5305 33.7893 37.0392 33.4142 37.4142C33.0391 37.7893 32.5304 38 32 38C31.4696 38 30.9609 37.7893 30.5858 37.4142C30.2107 37.0392 30 36.5305 30 36C30 35.4696 30.2107 34.9609 30.5858 34.5858C30.9609 34.2107 31.4696 34 32 34C32.5304 34 33.0391 34.2107 33.4142 34.5858C33.7893 34.9609 34 35.4696 34 36Z" />
    </Svg>
);
export const CloseSvg = () => (
    <Svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"></path>
    </Svg>
);

const Svg = styled.svg`
    fill: ${unactiveFontColor};
    &:hover{
        color: ${activeFontColor}
    }
`;


export const UlContainer = styled.div`
    margin-top: 1rem;
    overflow: auto;
    max-height: 10rem;
`;

export const Ul = styled.ul`
`;
export const Link = styled.a`

`;
export const Li = styled.li`
    position: relative;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    color: white;
    text-align: center;
`;

export const ElemsContainer = styled.div`
    margin-top: 2rem;
`;
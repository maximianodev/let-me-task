import { createGlobalStyle, css } from 'styled-components'
import media from 'styled-media-query'


const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    @import url("https://s3-sa-east-1.amazonaws.com/we.digi.tech/fonts/basic/flaticon.css");
    @import url("https://s3-sa-east-1.amazonaws.com/we.digi.tech/fonts/feather/feather-icons.css");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: none;
      font-family: ${theme.font.family.primary};
    }
  
    body {
      color: ${theme.colors.colorText};
      font-size: ${theme.sizes.xsmall};
      ${media.lessThan('large')`
        font-size: ${theme.sizes.xsmall};
      `}
    }

    img {
      max-width: 100%;
      height: auto;
    }
    
    button {
        border: 0;
    }

    img {
        height: auto;
        max-width: 100%;
    }

    ul,
    p {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
        display: inline-block;
    }

    button,
    a {
        cursor: pointer;
    }

    input,
    button {
        outline: 0;
    }

    .container {
        padding: 0 30px;
        ${media.lessThan('large')`
            padding: 0 15px;
        `}
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .column {
        display: flex;
        flex-direction: column;
    }

    // styles default slick 

    .slick-slider {
        .slick-prev {
            z-index: 1;
            left: 30px;
            width: 35px;
            height: 35px;
            ${media.lessThan('large')`
                left: 15px;
            `}
            &::before {
                content: "";
                display: block;
                width: inherit;
                height: inherit;
                background: url(${theme.icons.leftArrow}) no-repeat center;
                background-size: contain;
            }
        }
        .slick-list {
            .slick-track {
                display: flex;
            }
        }
        .slick-next {
            z-index: 1;
            right: 30px;
            width: 35px;
            height: 35px;
            ${media.lessThan('large')`
                right: 15px;
            `}
            &::before {
                content: "";
                display: block;
                width: inherit;
                height: inherit;
                background: url(${theme.icons.rightArrow}) no-repeat center;
                background-size: contain;
            }
        }
        
        .slick-dots {
            bottom: 15px;
            li {
                margin: 0;
                button {
                    &::before {
                        font-size: 12px;
                    }
                }
            }
            .slick-active {
                button {
                    &::before {
                        color: ${theme.colors.green};
                    }
                }
            }
            
        }
    }
    
    ${media.lessThan('large')`
      html {
          font-size: 93.75%;
      }
    `}

    ${media.lessThan('medium')`
      html {
          font-size: 87.5%;
      }
    `}
  `}
`

export { GlobalStyle }
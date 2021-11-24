import styled from "styled-components";

export const ProjectItemWrapper = styled.div<{ position: "left" | "right" }>`
  width: 900px;
  position: relative;
  height: 400px;
  overflow: hidden;
  z-index: 99;
  margin-bottom: 5em;
  display: flex;
  align-items: center;

  .preview {
    position: absolute;
    ${props => {
      if (props.position === "left") {
        return {left: 0}
      } else {
        return {right: 0}
      }
    }}
    width: 60%;
    cursor: pointer;

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      height: 100%;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
      transition: all .5s 0s ease-in-out;
    }
  }

  &:hover {
    .preview {
      img {
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
      }
    }
  }

  .details {
    width: 50%;
    position: absolute;
    ${props => {
      if (props.position === "left") {
        return {right: 0}
      } else {
        return {left: 0}
      }
    }}
    color: ${(props) => (props.theme.textColor)};
    text-align: ${(props) => props.position === "left" ? "right" : "left"};

    span:first-child {
      font-size: .9em;
      color: ${(props) => (props.theme.fourth)};
    }

    h3 {
      margin: .2em 0 .5em 0;
      font-size: 1.7em;
    }

    ul {
      list-style: none;
      display: flex;
      padding-left: 0;
      justify-content: ${(props) => props.position === "left" ? "flex-end" : "flex-start"};
      color: ${(props) => (props.theme.fourth)};

      li {
        font-size: .9em;
        ${props => {
          if (props.position === "left") {
            return {marginLeft: "1em"}
          } else {
            return {marginRight: "1em"}
          }
        }}
      }
    }

    .description-panel {
      font-size: 1em;
      background-color: ${(props) => (props.theme.primary)};
      padding: 1em;
      color: ${(props) => (props.theme.textColor)};

      span {
        font-size: 1em;
        color: ${(props) => (props.theme.fourth)};
      }
    }

    .actions {
      a {
        color: ${(props) => (props.theme.textColor)};
        font-size: 1.2em;

        ${props => {
          if (props.position === "left") {
            return {marginLeft: ".5em"}
          } else {
            return {marginRight: ".5em"}
          }
        }}
        
        &:hover {
          color: ${(props) => (props.theme.fourth)};
        }
      }
    }
  }
`;
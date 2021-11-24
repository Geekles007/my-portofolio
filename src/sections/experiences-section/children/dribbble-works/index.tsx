import {memo} from "react";
import * as React from "react";
import styled from "styled-components";
import {dribbble_api, SHOTS_PER_PAGE} from "../../../../constants";
import axios from "axios";
import WorksViewer from "../works-viewer";

interface DribbbleWorksProps {

}

const DribbbleWorksWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 3em 5em;

  img {
    object-position: center;
    object-fit: contain;
  }

  h1 {
    font-size: 4em;
    position: relative;
    z-index: 4;
    margin-bottom: 1em;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 5px;

      height: 15px;
      z-index: -1;
      width: 130px;
    }
  }

  .grid {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
`;

const DribbbleWorks = ({}: DribbbleWorksProps) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [dribbblePage, setDribbblePage] = React.useState<any>(1);
    const [dribbblePosts, setDribbblePosts] = React.useState<any>([]);

    React.useEffect(() => {
        async function getDribbblePosts() {
            try {
                const dribbbleRes = await axios.get(
                    `https://api.dribbble.com/v2/user/shots?access_token=${dribbble_api.ACCESS_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`,
                );

                setDribbblePosts([...dribbblePosts, ...dribbbleRes?.data]);

                if (isLoading) setIsLoading(false);
            } catch (error) {
                console.warn(error);
                if (isLoading) setIsLoading(false);
                setIsError(true);
            }
        }

        getDribbblePosts();
    }, []);

    return (
        <DribbbleWorksWrapper>
            <WorksViewer loading={isLoading} posts={dribbblePosts ?? []} />
        </DribbbleWorksWrapper>
    );

}

export default memo<DribbbleWorksProps>(DribbbleWorks);
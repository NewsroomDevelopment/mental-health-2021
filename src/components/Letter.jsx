import React from "react";
import styled from "styled-components";

const LetterSection = styled.div`
  padding: 5%;
`;
const Title = styled.div`
  text-align: center;
  padding: 2%;
  font-size: 3rem;
  background-image: linear-gradient(
    89.88deg,
    #000748 35.17%,
    #204352 66.32%,
    #12909e 91.06%
  );

  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  font-family: Bitter;
  font-style: normal;
  font-weight: bold;

  text-shadow: 5px 5px 4px rgba(27, 192, 211, 0.5);
`;

const Text = styled.div`
  font-size: 16px;
  color: rgba(28, 81, 133, 1);
`;
const Letter = () => {
  return (
    <LetterSection>
      <Title> Letter from the Editor </Title>
      <Text>
        <p>Dear readers,</p>
        <p>
          Columbia can often feel like a pressure cooker. It accepts some of the
          most competitive applicants in the world, many who have never been
          encouraged to slow down and take a breath, many who were always
          encouraged to do the opposite.{" "}
        </p>
        <p>
          With finals approaching, we wanted to not only give you a better look
          at what mental health looks like on Columbia’s campus but also provide
          you with some tips, tricks, and resources to lessen your anxiety
          during this very stressful time.{" "}
        </p>
        <p>
          In this edition, please exercise caution while reading these articles,
          as some of them deal with topics of disordered eating, depression, and
          other mental health topics. They discuss stories of disordered eating
          in the dance world, on cross-country and track teams, and in the
          Columbia and Barnard dining halls. Other pieces reflect on resident
          advisors’ struggles in finding community within their living
          situations as they simultaneously feel unprepared to deal with their
          residents’ mental health struggles.{" "}
        </p>
        <p>
          However, this edition also aims to highlight those who are working to
          raise mental health awareness and cultivate positive mindsets. Read
          through this edition to find members of the Columbia community hoping
          to destigmatize speaking up about struggling with mental health,
          at-home bakers using their hobby to de-stress and take care of
          themselves, and students finding community through Columbia
          Confessions in times of need. We hope that in reading their stories,
          you feel encouraged to prioritize your own mental health and that of
          others.{" "}
        </p>
        <p>
          At Spectator, we have focused our efforts this past year on changing
          the way that we grapple with mental health and burnout among our
          staff. We have implemented a reasonable end time for production
          nights; expanded our use of content warnings; elected our first head
          of Diversity, Equity, and Inclusion on Spectator’s managing board,
          Natalie Park; established a weekly-meeting DEI committee that
          discusses ways to improve our reporting and staff culture; and voted
          in new policies for our Community Standards. However, there remains
          more that we can do—both as members of Spectator and Columbia
          students—to combat the stress culture that is so pervasive within the
          Columbia community.{" "}
        </p>
        <p>
          As our tenures on Spectator’s corporate board come to a close, we
          wanted to thank you for a year of reading and learning with us. Now,
          it is time for all of us to slow down and take a breath before the end
          of the year ramps up. We promise you deserve it.{" "}
        </p>
        <p>
          Wishing you a meaningful end to the semester, <br />
          <p>
            Sarah Braka, Editor in Chief <br />
            Elizabeth Karpen, Managing Editor <br />
            Tamarah Wallace, Publisher
          </p>
        </p>
      </Text>
    </LetterSection>
  );
};

export default Letter;

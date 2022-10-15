import { Layout } from "./components/Layout";
import { Page } from "./components/Page";
import { getAge } from "./lib";
import { className } from "./styles/lib";
import { font, fontSize, h, w } from "./styles/utils";
import profileImage from "./assets/Slack_Icon_20220507.png";
import { Stack } from "./components/Stack";
import { Card } from "./components/Card";

const aboutMe = {
  name: "加藤豪 (Takeshi Kato)",
  handleName: "ERASER (eraser5th)",
  age: getAge(new Date("10/15/2001")),
  university: "会津大学 コンピュータ理工学部 学部2年",
  hobby: "Neovim",
};

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Vue",
  "Nuxt",
  "GraphQL",
  "Git",
];

const hobbies = ["Neovim", "Wezterm", "Vtuber", "Splatoon"];

export const App: React.FC = () => {
  return (
    <Page>
      <Layout>
        <div className={h.px60} />
        <img className={className(h.px200, w.px200)} src={profileImage} />
        <div className={h.px40} />
        <Stack>
          <Card>
            <h1 className={className(font.bold, fontSize["5xl"])}>About me</h1>
            <ul>
              <li>{aboutMe.handleName}</li>
              <li>{aboutMe.name}</li>
              <li>{aboutMe.age}</li>
            </ul>
          </Card>
          <Card>
            <h1 className={className(font.bold, fontSize["5xl"])}>Skills</h1>
            <ul>
              {skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h1 className={className(font.bold, fontSize["5xl"])}>Hobbies</h1>
            <ul>
              {hobbies.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </Card>
        </Stack>
        <div className={h.px80} />
      </Layout>
    </Page>
  );
};

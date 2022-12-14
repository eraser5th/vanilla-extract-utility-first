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
        <Stack gap="px80">
          <img className={className(h.px200, w.px200)} src={profileImage} />
          <h1 className={className(fontSize["6xl"])}>eraser5th</h1>
        </Stack>
        <div className={h.px40} />
        <Stack gap="px16">
          <Card sectioned shadow>
            <h1 className={className(font.bold, fontSize["4xl"])}>About me</h1>
            <ul>
              <li>{aboutMe.handleName}</li>
              <li>{aboutMe.name}</li>
              <li>{aboutMe.age}</li>
            </ul>
          </Card>
          <Card sectioned shadow>
            <h1 className={className(font.bold, fontSize["4xl"])}>Skills</h1>
            <ul>
              {skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </Card>
          <Card sectioned shadow>
            <h1 className={className(font.bold, fontSize["4xl"])}>Hobbies</h1>
            <ul>
              {hobbies.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </Card>
        </Stack>
        <div className={h.px120} />
        <footer>
          <h1 className={className(font.bold, fontSize["2xl"])}>Links</h1>
          <ul>
            <li>
              <a href="https://github.com/eraser5th">github</a>
            </li>
            <li>
              <a href="https://twitter.com/eraser5th">twitter</a>
            </li>
            <li>
              <a href="https://github.com/eraser5th/vanilla-extract-utility-first">
                code for this page
              </a>
            </li>
          </ul>
        </footer>
        <div className={h.px80} />
      </Layout>
    </Page>
  );
};

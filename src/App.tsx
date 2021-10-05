import { Card, Col, Divider, Layout, Row, Space, Typography } from "antd";
import placeholder from "./placeholder.png";
import "./App.css";

function App() {
  return (
    <Layout>
      <Layout.Content style={{ padding: "1rem" }}>
        <Space>
          {cards.map((card: any) => (
            <TradingCard key={card.title} {...card} />
          ))}
        </Space>
      </Layout.Content>
    </Layout>
  );
}

export default App;

// ===

interface Props {
  kind: CardKind;
  level: number;
  title: string;
  energy: number;
  size?: CardSize;
  skills: CardSkill[];
  effects: CardEffect[];
}

export function TradingCard({
  kind,
  level,
  title,
  energy,
  skills,
  effects,
  size = "medium",
}: Props) {
  const [width, height] = CARD_SIZES[size];
  const [gradientFrom, gradientTo] = CARD_GRADIENTS[kind];

  return (
    <Card
      style={{
        position: "relative",
        width,
        height,
        background: `linear-gradient(317deg, ${gradientTo} 0%, ${gradientFrom} 50%, ${gradientTo} 100%)
        `,
        // background: "red",
      }}
      title={title}
      headStyle={{
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.1ch",
      }}
      bodyStyle={{ padding: "0.25rem" }}
    >
      {/* Level/Influence */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width / 5,
          height: height / 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid gray",
        }}
      >
        <Typography.Title level={2} style={{ margin: 0 }}>
          {level}
        </Typography.Title>
      </div>

      {/* Energy  */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: width / 5,
          height: height / 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px solid gray",
        }}
      >
        <Typography.Title level={2} style={{ margin: 0 }}>
          {energy}
        </Typography.Title>
      </div>

      <img
        src={placeholder}
        alt=""
        style={{ width: width - 10, height: 200 }}
      />

      <Row gutter={[12, 0]}>
        <Col span={24}>
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <Divider orientation="right" style={{ margin: 0 }}>
                <Typography.Text type="secondary" className="fancy small-text">
                  Skills
                </Typography.Text>
              </Divider>
              <Space>
                {skills.map((skill) => (
                  <div key={skill.name} style={{ fontSize: 10 }}>
                    <strong>
                      [{skill.cost}] {skill.name}:{" "}
                    </strong>
                    <em>{skill.description}</em>
                  </div>
                ))}
              </Space>
            </Col>
            <Col span={24}>
              <Divider orientation="right" style={{ margin: 0 }}>
                <Typography.Text type="secondary" className="fancy small-text">
                  Effects
                </Typography.Text>
              </Divider>
              <Space>
                {effects.map((effect) => (
                  <div key={effect.name} style={{ fontSize: 10 }}>
                    <strong>{effect.name}: </strong>{" "}
                    <em>{effect.description}</em>
                  </div>
                ))}
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

// === CARDS
type CardKind = "artist" | "request" | "post";

type CardSize = "small" | "medium" | "large";

type CardSkill = {
  name: string;
  description: string;
  cost: number;
};

type CardEffect = {
  name: string;
  description: string;
};

const CARD_SIZES: Record<CardSize, [number, number]> = {
  small: [200, 280],
  medium: [300, 420],
  large: [370, 518],
};

const CARD_GRADIENTS: Record<CardKind, [string, string]> = {
  artist: ["#DEA7A4", "#7A4544"], // red
  request: ["#9FBFE6", "#6C9FDB"], // blue
  post: ["#DCE9C6", "#687A48"], // green
};

// === TEST
const cards = [
  {
    level: 1,
    kind: "artist",
    title: "Artist",
    energy: 0,
    skills: [
      {
        name: "Bar",
        description: "Lorem ipsum dolor sit amet",
        cost: 5,
      },
    ],
    effects: [{ name: "Baz", description: "Lorem ipsum dolor sit amet" }],
  },
  {
    level: 1,
    kind: "request",
    title: "Request",
    energy: 0,
    skills: [
      {
        name: "Bar",
        description: "Lorem ipsum dolor sit amet",
        cost: 5,
      },
    ],
    effects: [{ name: "Baz", description: "Lorem ipsum dolor sit amet" }],
  },
  {
    level: 1,
    kind: "post",
    title: "Post",
    energy: 0,
    skills: [
      {
        name: "Bar",
        description: "Lorem ipsum dolor sit amet",
        cost: 5,
      },
    ],
    effects: [{ name: "Baz", description: "Lorem ipsum dolor sit amet" }],
  },
];

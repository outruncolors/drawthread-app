import { Card, Col, Divider, Layout, Row, Space, Typography } from "antd";
import { GiLevelFour, GiRollingEnergy } from "react-icons/gi";
import placeholder from "./placeholder.png";
import "./App.css";
import { cards } from "./game";

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

type Props = CardData & {
  size?: CardSize;
};

export function TradingCard({
  kind,
  level,
  subtitle,
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
      }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <div style={{ flex: 3, lineHeight: 0.6 }}>
            {subtitle && (
              <Typography.Text type="secondary" style={{ fontSize: 10 }}>
                {subtitle}
              </Typography.Text>
            )}
            <Typography.Title level={4} style={{ margin: 0 }}>
              {title}
            </Typography.Title>
          </div>
          <div>
            <div style={{ lineHeight: 0.6 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GiLevelFour
                  fontSize={18}
                  opacity={0.5}
                  style={{ marginRight: 6 }}
                />
                <Typography.Title level={4} style={{ margin: 0 }}>
                  {level}
                </Typography.Title>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GiRollingEnergy
                  fontSize={18}
                  opacity={0.5}
                  style={{ marginRight: 6 }}
                />
                <Typography.Title level={4} style={{ margin: 0 }}>
                  {energy}
                </Typography.Title>
              </div>
            </div>
          </div>
        </div>
      }
      headStyle={{
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.1ch",
      }}
      bodyStyle={{ padding: "0.25rem" }}
    >
      {/* Level/Influence */}
      <img
        src={placeholder}
        alt=""
        style={{ width: width - 10, height: 150 }}
      />

      <Row gutter={[12, 0]}>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Divider orientation="left" style={{ margin: 0 }}>
                <Typography.Text type="secondary" className="fancy small-text">
                  Skills
                </Typography.Text>
              </Divider>
              <Typography.Title level={5} style={{ margin: 0 }}>
                {skills.join(", ")}
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Divider orientation="right" style={{ margin: 0 }}>
                <Typography.Text type="secondary" className="fancy small-text">
                  Effects
                </Typography.Text>
              </Divider>
              <div
                style={{
                  fontSize: 12,
                  padding: "0.5rem",
                  borderRadius: 4,
                  background: "rgba(50, 50, 50, 0.7)",
                  color: "#bbb",
                }}
              >
                {effects}
              </div>
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

type CardData = {
  kind: CardKind;
  level: number;
  subtitle: string;
  title: string;
  energy: number;
  skills: string[];
  effects: string[];
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

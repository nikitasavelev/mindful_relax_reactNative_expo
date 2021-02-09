import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";

import constants from "../config/constants";

import {
  VictoryLine,
  VictoryChart,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryGroup,
  VictoryScatter,
} from "victory-native";

const heartRateData = [
  {
    name: "1",
    uv: 80,
    pv: 2,
  },
  {
    name: "2",
    uv: 86,
    pv: 5,
  },
  {
    name: "3",
    uv: 90,
    pv: 3,
  },
  {
    name: "4",
    uv: 87,
    pv: 10,
  },
  {
    name: "5",
    uv: 95,
    pv: 2,
  },
  {
    name: "6",
    uv: 88,
    pv: 3,
  },
  {
    name: "7",
    uv: 90,
    pv: 1,
  },
];

function GamificationScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <VictoryChart
          height={400}
          width={400}
          domainPadding={{ y: 10 }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => `y: ${datum.y}`}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  flyoutStyle={{ fill: "white" }}
                />
              }
            />
          }
        >
          <VictoryLine
            data={[
              { x: 1, y: 80, l: "one" },
              { x: 2, y: 86, l: "one point five" },
              { x: 3, y: 90, l: "two" },
              { x: 4, y: 87, l: "three" },
            ]}
            style={{
              data: {
                stroke: "tomato",
                strokeWidth: ({ active }) => (active ? 4 : 2),
              },
              labels: { fill: "tomato" },
            }}
          />
        </VictoryChart>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: constants.lightColor,
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GamificationScreen;

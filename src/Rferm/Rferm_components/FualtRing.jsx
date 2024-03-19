
import React from 'react';
import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem, Grid, Card } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { CgTrendingDown } from "react-icons/cg";

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};



const FualtRing = ({ data }) => {
  return (
    <>
      {data.map((stat) => {
        const Icon = icons[stat.icon];
        return (
          <Paper withBorder radius="md" p="xs" key={stat.label} > {/*bg={"linear-gradient(to right, #efb1aa, #fc0000)"*/}
            <Group>
              <RingProgress
                size={100}
                roundCaps
                thickness={8}
                sections={[{ value: stat.progress, color: stat.color }]}
                label={
                  <Center>
                    <CgTrendingDown style={{ width: rem(40), height: rem(40), }} stroke={1.5} />
                  </Center>
                }
              />
              <div>
                <Text c="dimmed" size="lg" tt="uppercase" fw={700}>
                  {stat.label}
                </Text>
                <Text fw={700} size="xl">
                  {stat.stats}
                </Text>
              </div>
            </Group>
          </Paper>
        );
      })}
    </>
  );
};


export default FualtRing
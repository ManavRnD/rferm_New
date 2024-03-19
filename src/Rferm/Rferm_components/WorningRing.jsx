
import React from 'react';
import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem, Grid, Card, useMantineTheme } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { AiOutlineWarning } from "react-icons/ai";
import { PiWarningBold } from "react-icons/pi";


const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};



const WorningRing = ({ data }) => {
  const theme = useMantineTheme();
  return (
    <>
      {data.map((stat) => {
        const Icon = icons[stat.icon];
        return (
          <Paper withBorder radius="md" p="xs" key={stat.label} > {/*bg={"linear-gradient(to right, #feb300, #efb1aa)"}*/}
            <Group>
              <RingProgress
                size={100}
                roundCaps
                thickness={8}
                sections={[{ value: stat.progress, color: stat.color }]}
                label={
                  <Center>
                    <PiWarningBold style={{ width: rem(40), height: rem(40) }} stroke={1.5} />
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


export default WorningRing
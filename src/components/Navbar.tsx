import React from "react";
import { Stack, Box, Tabs, TabProps, Tab as MuiTab } from "@mui/material";
import { makeStyles, withStyles } from "tss-react/mui";
import Link from "/src/components/ui/Link";
import { useRouter } from "next/router";

const useStyles = makeStyles()(() => ({
  tabs: {
    "& .MuiTab-root": {
      margin: "0 20px",
    },
  },
}));

const Tab = <C extends React.ElementType>(
  props: TabProps<C, { component?: C }>,
) => {
  return <MuiTab {...props} />;
};

const Navbar: React.FC = () => {
  const { classes } = useStyles();
  const { asPath } = useRouter();

  return (
    <Box component="header">
      <Stack alignItems="center">
        <Tabs value={asPath} className={classes.tabs}>
          <Tab component={Link} href="/" value="/" label="home" />

          <Tab component={Link} href="/posts" value="/posts" label="posts" />
          <Tab component={Link} href="/about" value="/about" label="about" />
        </Tabs>
      </Stack>
    </Box>
  );
};

export default Navbar;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
